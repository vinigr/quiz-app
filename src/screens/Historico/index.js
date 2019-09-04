import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { formatToTimeZone } from 'date-fns-timezone';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container, ViewList, ItemList, ViewLeft, TitleItem,
  DateDispute, ViewRight, ViewScore, TextScore, ButtonDetails,
} from './styles';


import api from '../../service/api';

export default function Histórico(props) {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      const { data } = await api.post('/disputesList');
      setDisputes(data.disputes);
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
        <FlatList
          data={disputes}
          keyExtractor={item => `${item.id}`}
          onRefresh={fetchData}
          refreshing={loading}
          renderItem={({ item }) => (
            <ItemList>
              <ViewLeft>
                <TitleItem>{item.Quiz.name}</TitleItem>
                <DateDispute>
                  {formatToTimeZone(
                    item.createdAt, 'DD/MM/YY | HH:mm', {
                      timeZone: 'America/Sao_Paulo',
                    },
                  )}
                </DateDispute>
              </ViewLeft>
              <ViewRight>
                <ViewScore>
                  <TextScore>Pontuação</TextScore>
                  <TextScore>{item.score}</TextScore>
                </ViewScore>
                <ButtonDetails onPress={() => props.navigation.navigate('Result', { quizId: item.quizId, disputeId: item.id })}>
                  <Icon name="chevron-right" color="#000" size={30} />
                </ButtonDetails>
              </ViewRight>
            </ItemList>
          )}
        />
      </ViewList>

    </Container>
  );
}
