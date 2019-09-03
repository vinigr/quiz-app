import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container, Title, HeadList, TextHead, User, UserName, UserScore, UserThis,
  ButtonShowAnswers, TextButton,
} from './styles';

import api from '../../service/api';

export default function Result() {
  const [disputes, setDisputes] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  async function fetchData() {
    try {
      const { data } = await api.get('/result/2');
      setDisputes(data.disputes);
    } catch (error) {
      console.tron.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Title>Ranking</Title>
      <HeadList>
        <TextHead>Nome</TextHead>
        <TextHead>Pontuação</TextHead>
      </HeadList>
      <FlatList
        data={disputes}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          item.id !== 99
            ? (
              <User>
                <UserName>{item.User.name}</UserName>
                <UserScore>{item.score}</UserScore>
              </User>
            ) : (
              <UserThis>
                <UserName>{item.User.name}</UserName>
                <UserScore>{item.score}</UserScore>
              </UserThis>
            )
        )
      }
      />
      {!showAnswers ? (
        <ButtonShowAnswers onPress={() => setShowAnswers(true)}>
          <TextButton>Mostrar respostas</TextButton>
          <Icon name="chevron-down" color="#000" size={30} />
        </ButtonShowAnswers>
      ) : (
        <ButtonShowAnswers onPress={() => setShowAnswers(false)}>
          <TextButton>Ocultar respostas</TextButton>
          <Icon name="chevron-up" color="#000" size={30} />
        </ButtonShowAnswers>
      )}

    </Container>
  );
}
