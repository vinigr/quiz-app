import React, { useState, useEffect } from 'react';

import {
  FlatList,
} from 'react-native';

import {
  Container, ViewList, QuizItem, TitleItem, Header, Footer, ButtonStart, TextButton,
} from './styles';

import Loading from '../../../components/Loading';

import api from '../../../service/api';

export default function Quizzes(props) {
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);


  useEffect(() => {
    const id = props.navigation.getParam('id');

    const fetchData = async () => {
      try {
        const result = await api.get(`/subjectQuizList/${id}`);
        await setQuizzes(result.data);
        console.tron.log(result.data);
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
        <ViewList>

          <FlatList
            data={quizzes}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => (
              <QuizItem>
                <Header>
                  <TitleItem>{item.name}</TitleItem>
                </Header>
                <Footer>
                  <ButtonStart>
                    <TextButton>INICIAR</TextButton>
                  </ButtonStart>
                </Footer>
              </QuizItem>
            )}
          />
        </ViewList>
      )}
    </Container>
  );
}
