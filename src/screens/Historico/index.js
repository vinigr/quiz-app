import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {formatToTimeZone} from 'date-fns-timezone';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  ViewList,
  ItemList,
  ViewLeft,
  TitleItem,
  DateDispute,
  ViewRight,
  ViewScore,
  TextScore,
  ButtonDetails,
} from './styles';

import api from '../../service/api';
import {
  ViewNotQuiz,
  ButtonUpdate,
  TextUpdate,
  TextNotQuiz,
} from '../Questionarios/styles';

export default function Histórico(props) {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      const {data} = await api.post('/disputesList');
      if (data.disputes) {
        setDisputes(data.disputes);
      }
    } catch (error) {
      console.tron.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ViewList>
        {disputes.length > 0 ? (
          <FlatList
            data={disputes}
            keyExtractor={item => `${item.id}`}
            onRefresh={fetchData}
            refreshing={loading}
            renderItem={({item, index}) => (
              <ItemList>
                <ViewLeft>
                  <TitleItem>{item.Quiz.name}</TitleItem>
                  <DateDispute>
                    {formatToTimeZone(item.createdAt, 'DD/MM/YY | HH:mm', {
                      timeZone: 'America/Sao_Paulo',
                    })}
                  </DateDispute>
                </ViewLeft>
                <ViewRight>
                  <ViewScore>
                    <TextScore>Pontuação</TextScore>
                    <TextScore>{item.score > 0 ? item.score : 0}</TextScore>
                  </ViewScore>
                  <ButtonDetails
                    onPress={() =>
                      props.navigation.navigate('Result', {
                        quizId: item.quizId,
                        disputeId: item.id,
                      })
                    }>
                    <Icon name="chevron-right" color="#000" size={30} />
                  </ButtonDetails>
                </ViewRight>
              </ItemList>
            )}
          />
        ) : (
          <ViewNotQuiz>
            <TextNotQuiz>Histórico não disponível</TextNotQuiz>
            <ButtonUpdate onPress={fetchData}>
              <TextUpdate>Atualizar</TextUpdate>
            </ButtonUpdate>
          </ViewNotQuiz>
        )}
      </ViewList>
    </Container>
  );
}
