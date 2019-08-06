import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import {
  Container, Title, User, ImageUser, TextUser,
} from './styles';

import Loading from '../../../components/Loading';

import imagePerson from '../../../assets/images/default-person.png';

import api from '../../../service/api';

export default function Disciplina(props) {
  const [loading, setLoading] = useState(true);
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    const id = props.navigation.getParam('id');

    const fetchData = async () => {
      try {
        const result = await api.get(`/subject/users/${id}`);
        await setPeoples(result.data);
        return setLoading(false);
      } catch (error) {
        return console.tron.log(error.response);
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
            <TextUser>{peoples.subject.user.name}</TextUser>
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
