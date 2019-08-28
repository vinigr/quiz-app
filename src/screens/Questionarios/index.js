import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container, Title, Description, Header, SubjectName,
} from './styles';
import {
  QuizItem,
  TitleItem,
  Footer,
  InfoExpired,
  TextExpiry,
  DateExpiry,
  ButtonStart,
  TextButton,
} from '../Disciplina/Quizzes/styles';

import api from '../../service/api';

const { formatToTimeZone } = require('date-fns-timezone');

export default function Questionarios(props) {
  const [loading, setLoading] = useState(true);
  const [quizzesNext, setQuizzesNext] = useState([]);
  const [quizzesOthers, setQuizzesOthers] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const result = await api.get('/allQuizzes/');
      await setQuizzesNext(result.data.listNext);
      await setQuizzesOthers(result.data.listOthers);
      return setLoading(false);
    } catch ({ response }) {
      return console.tron.log(response);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Container>
        <Title>Próximos</Title>
        <Description>(Expiram em até 7 dias)</Description>
        <FlatList
          data={quizzesNext}
          keyExtractor={item => `${item.id}`}
          onRefresh={fetchData}
          refreshing={loading}
          renderItem={({ item }) => (
            <QuizItem>
              <Header>
                <TitleItem>{item.name}</TitleItem>
                <SubjectName>{item.subject.name}</SubjectName>
              </Header>
              <Footer>
                <InfoExpired>
                  {item.expirationAt ? (
                    <>
                      <TextExpiry>Disponível até:</TextExpiry>
                      <DateExpiry>
                        {formatToTimeZone(
                          item.expirationAt, 'DD/MM HH:mm', {
                            timeZone: 'America/Sao_Paulo',
                          },
                        )}
                      </DateExpiry>
                    </>
                  ) : <TextExpiry>Disponível</TextExpiry>}
                </InfoExpired>
                {(new Date().toISOString() < item.expirationAt || !item.expirationAt)
                    && (
                    <ButtonStart onPress={() => props.navigation.navigate('Quiz',
                      { item: item.id, feedbackAnswer: item.feedbackAnswer })}
                    >
                      <TextButton>INICIAR</TextButton>
                      <Icon name="play" size={24} color="#fff" />
                    </ButtonStart>
                    )
                  }
              </Footer>
            </QuizItem>
          )}
        />
        <Title>Outros</Title>
        <FlatList
          data={quizzesOthers}
          keyExtractor={item => `${item.id}`}
          onRefresh={quizzesNext.length === 0 ? fetchData : null}
          refreshing={loading}
          renderItem={({ item }) => (
            <QuizItem>
              <Header>
                <TitleItem>{item.name}</TitleItem>
                <SubjectName>{item.subject.name}</SubjectName>
              </Header>
              <Footer>
                <InfoExpired>
                  {item.expirationAt ? (
                    <>
                      <TextExpiry>Disponível até:</TextExpiry>
                      <DateExpiry>
                        {formatToTimeZone(
                          item.expirationAt, 'DD/MM HH:mm', {
                            timeZone: 'America/Sao_Paulo',
                          },
                        )}
                      </DateExpiry>
                    </>
                  ) : <TextExpiry>Disponível</TextExpiry>}
                </InfoExpired>
                {(new Date().toISOString() < item.expirationAt || !item.expirationAt)
                    && (
                    <ButtonStart onPress={() => props.navigation.navigate('Quiz',
                      { item: item.id, feedbackAnswer: item.feedbackAnswer })}
                    >
                      <TextButton>INICIAR</TextButton>
                      <Icon name="play" size={24} color="#fff" />
                    </ButtonStart>
                    )
                  }
              </Footer>
            </QuizItem>
          )}
        />
      </Container>
    </>
  );
}
