import React, { useState, useEffect } from 'react';
import {
  FlatList, TouchableOpacity, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import {
  Container,
  HeaderBar,
  ViewList,
  ItemList,
  HeaderSubject,
  ViewSubject,
  TitleItem,
  TopicItem,
  TouchableIcon,
  ViewTeacher,
  NameTeacher,
  ViewModal,
  OptionsModal,
  OptionsText,
  ViewModalAdd,
  TextModalAdd,
  InputCode,
  ButtonAdd,
  TextAdd,
} from './styles';

import Loading from '../../components/Loading';

import api from '../../service/api';

export default function Disciplinas(props) {
  const [subject, setSubject] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscaBanco() {
      try {
        const subjects = await api.get('/user/subjects');
        await setSubject(subjects.data.subjects);
        return setLoading(false);
      } catch (error) {
        return console.tron.log(error);
      }
    }
    buscaBanco();
  }, []);

  async function addSubject() {
    if (!code || code === '') return setModalAdd(false);

    await setModalAdd(false);
    try {
      const subjectRegister = await api.post('/subject/registrationUser', {
        accessCode: code,
      });
      await setModalAdd(false);

      const tempSubjects = [...subject];
      tempSubjects.push(subjectRegister.data);
      setSubject(tempSubjects);

      return Alert.alert('Sucesso', 'cadastrado');
    } catch (error) {
      await setModalAdd(false);
      return Alert.alert('Erro', error.response.data.message);
    }
  }

  return (
    <Container>
      <HeaderBar>
        <TouchableOpacity
          onPress={() => setModalAdd(true)}
        >
          <Icon
            name="plus"
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      </HeaderBar>
      {loading ? <Loading />
        : (
          <ViewList>
            <FlatList
              data={subject}
              keyExtractor={item => `${item.subject_id}`}
              renderItem={({ item }) => (
                <ItemList onPress={() => props.navigation.navigate('Disciplina', {
                  id: item.subject_id,
                })
              }
                >
                  <HeaderSubject>
                    <ViewSubject>
                      <TitleItem>{item.subject.name}</TitleItem>
                      <TopicItem>{item.subject.topic}</TopicItem>
                    </ViewSubject>
                    <TouchableIcon
                      onPress={() => setVisible(true)}
                    >
                      <Icon name="dots-vertical" size={24} />
                    </TouchableIcon>
                  </HeaderSubject>
                  <ViewTeacher>
                    <NameTeacher>{item.subject.user.name}</NameTeacher>
                  </ViewTeacher>
                </ItemList>
              )}
            />
            <Modal
              isVisible={visible}
              onBackButtonPress={() => setVisible(false)}
              onBackdropPress={() => setVisible(false)}
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInTiming={200}
            >
              <ViewModal>
                <OptionsModal onPress={() => {}}>
                  <OptionsText>Cancelar inscrição</OptionsText>
                </OptionsModal>
              </ViewModal>
            </Modal>
            <Modal
              isVisible={modalAdd}
              onBackButtonPress={() => setModalAdd(false)}
              onBackdropPress={() => setModalAdd(false)}
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInTiming={200}
              hardwareAccelerated
            >
              <ViewModalAdd>
                <TextModalAdd>
                Peça o código para o criador da disciplina e digite-o abaixo:
                </TextModalAdd>
                <InputCode value={code} onChangeText={text => setCode(text)} />
                <ButtonAdd onPress={() => addSubject()}>
                  <TextAdd>Adicionar</TextAdd>
                </ButtonAdd>
              </ViewModalAdd>
            </Modal>
          </ViewList>
        )
      }
    </Container>
  );
}
