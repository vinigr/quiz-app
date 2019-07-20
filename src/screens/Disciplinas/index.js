import React, { useState, useEffect } from 'react';
import {
  FlatList, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  ViewList,
  ItemList,
  Header,
  ViewSubject,
  TitleItem,
  TopicItem,
  TouchableIcon,
  ViewTeacher,
  NameTeacher,
} from './styles';

import api from '../../service/api';

export default function Disciplinas() {
  const [subject, setSubject] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    buscaBanco();
  }, []);

  async function buscaBanco() {
    try {
      const subjects = await api.get('/user/subjects');
      await setSubject(subjects.data.subjects);
    } catch (error) {
      console.tron.log(error);
    }
  }


  return (
    <Container>
      {/* <View>
        <Searchbar
          placeholder="Buscar"
          // onChangeText={this.updateSearch}
          // value={search}
        />
      </View> */}
      {subject !== [] ? (

        <ViewList>
          <FlatList
            data={subject}
            keyExtractor={item => `${item.subject_id}`}
            renderItem={({ item }) => (

              <ItemList>
                <Header>
                  <ViewSubject>
                    <TitleItem>{item.subject.name}</TitleItem>
                    <TopicItem>{item.subject.topic}</TopicItem>
                  </ViewSubject>
                  <TouchableIcon onPress={() => setVisible(true)}>
                    <Icon name="dots-vertical" size={24} />
                  </TouchableIcon>
                </Header>
                <ViewTeacher>
                  <NameTeacher>{item.subject.user.name}</NameTeacher>
                </ViewTeacher>
              </ItemList>
              // </MenuProvider>
            )}
          />

        </ViewList>

      )
        : <ActivityIndicator />
      }
    </Container>
  );
}
