import React, {useState, useEffect} from 'react';

import {FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  ViewList,
  QuizItem,
  TitleItem,
  Header,
  Footer,
  InfoExpired,
  TextExpiry,
  DateExpiry,
  ButtonStart,
  TextButton,
  ItemExpired,
  HeaderExpired,
  FooterExpired,
} from './styles';

import Loading from '../../../components/Loading';

import api from '../../../service/api';

const {formatToTimeZone} = require('date-fns-timezone');

export default function Quizzes(props) {
  const [loading, setLoading] = useState(true);
  const [quizzesAvailable, setQuizzesAvailable] = useState([]);
  const [quizzesNotAvailable, setQuizzesNotAvailable] = useState([]);
  const [disputes, setDisputes] = useState([]);

  async function fetchData() {
    const id = props.navigation.getParam('id');
    try {
      const {data} = await api.get(`/subjectQuizList/${id}`);
      await setQuizzesAvailable(data.available);
      await setQuizzesNotAvailable(data.notAvailable);
      await setDisputes(data.disputes);
      return setLoading(false);
    } catch (error) {
      return console.tron.log(error.response);
    }
  }

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <ViewList>
            <FlatList
              data={quizzesAvailable}
              keyExtractor={item => `${item.id}`}
              onRefresh={fetchData}
              refreshing={loading}
              renderItem={({item}) => (
                <QuizItem>
                  <Header>
                    <TitleItem>{item.name}</TitleItem>
                  </Header>
                  <Footer>
                    <InfoExpired>
                      {item.expirationAt ? (
                        <>
                          <TextExpiry>Disponível até:</TextExpiry>
                          <DateExpiry>
                            {formatToTimeZone(
                              item.expirationAt,
                              'DD/MM HH:mm',
                              {
                                timeZone: 'America/Bahia',
                              },
                            )}
                          </DateExpiry>
                        </>
                      ) : disputes.indexOf(item.id) === -1 ? (
                        <TextExpiry>Disponível</TextExpiry>
                      ) : (
                        <TextExpiry>Já disputado</TextExpiry>
                      )}
                    </InfoExpired>
                    {(new Date().toISOString() < item.expirationAt ||
                      (!item.expirationAt &&
                        disputes.indexOf(item.id) === -1)) && (
                      <ButtonStart
                        onPress={() =>
                          props.navigation.navigate('Quiz', {
                            item: item.id,
                            feedbackAnswer: item.feedbackAnswer,
                          })
                        }>
                        <TextButton>INICIAR</TextButton>
                        <Icon name="play" size={24} color="#fff" />
                      </ButtonStart>
                    )}
                  </Footer>
                </QuizItem>
              )}
            />
            <FlatList
              data={quizzesNotAvailable}
              keyExtractor={item => `${item.id}`}
              renderItem={({item}) => (
                <ItemExpired>
                  <HeaderExpired>
                    <TitleItem>{item.name}</TitleItem>
                  </HeaderExpired>
                  <FooterExpired>
                    <InfoExpired>
                      <TextExpiry>Expirado</TextExpiry>
                    </InfoExpired>
                    <Icon name="timer-off" size={40} color="#FF5733" />
                  </FooterExpired>
                </ItemExpired>
              )}
            />
          </ViewList>
        </Container>
      )}
    </>
  );
}
