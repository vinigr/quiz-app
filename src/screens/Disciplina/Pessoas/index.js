import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import {
  Container, Title, User, ImageUser, TextUser,
} from './styles';

import Loading from '../../../components/Loading';

import imagePerson from '../../../assets/images/default-person.png';

import api from '../../../service/api';
import AuthService from '../../../service/auth';

export default function Disciplina(props) {
  const [loading, setLoading] = useState(true);
  const [teacher, setTeacher] = useState();
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    const id = props.navigation.getParam('id');
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/subject/users/${id}`);
        const { userId } = await AuthService.getProfile();
        const peoplesData = data.usersSubject.filter(people => people.user_id !== userId);
        await setTeacher(data.subject.user.name);
        await setPeoples(peoplesData);
        return setLoading(false);
      } catch ({ response }) {
        return console.tron.log(response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>Professor</Title>
          <User>
            <ImageUser source={imagePerson} />
            <TextUser>{teacher}</TextUser>
          </User>
          <Title>Colegas</Title>
          <FlatList
            data={peoples.usersSubject}
            keyExtractor={item => `${item.user_id}`}
            renderItem={({ item }) => (
              <User>
                <ImageUser source={item.user.path ? { uri: item.user.path } : imagePerson} />
                <TextUser>{item.user.name}</TextUser>
              </User>
            )}
          />
        </>
      )}
    </Container>
  );
}
