import React, { useState, useEffect } from 'react';
import {
  FlatList, TouchableOpacity, ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import {
  Container,
  IconsHeader,
  IconHeader,
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

  async function fetchData() {
    try {
      setLoading(true);
      const subjects = await api.get('/user/subjects');
      await setSubject(subjects.data.subjects);
      return setLoading(false);
    } catch (error) {
      return console.tron.log(error);
    }
  }

  useEffect(() => {
    props.navigation.setParams({ openModalSubject: () => setModalAdd(true), update: fetchData });
    fetchData();
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

      return ToastAndroid.showWithGravity(
        'Cadastro feito com sucesso!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } catch (error) {
      await setModalAdd(false);
      if (error.response.data.message) {
        return ToastAndroid.showWithGravity(
          `${error.response.data.message}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }
      return ToastAndroid.showWithGravity(
        'Erro ao cadastrar!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  }

  return (
    <Container>
      {loading ? <Loading />
        : (
          <ViewList>
            <FlatList
              data={subject}
              keyExtractor={item => `${item.subject_id}`}
              onRefresh={fetchData}
              refreshing={loading}
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
              backdropTransitionOutTiming={0}
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
              backdropTransitionOutTiming={0}
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

Disciplinas.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <IconsHeader>
      <IconHeader
        onPress={() => navigation.state.params.update()}
      >
        <Icon
          name="refresh"
          size={30}
          color="#000"
        />
      </IconHeader>
      <IconHeader
        onPress={() => navigation.state.params.openModalSubject()}
      >
        <Icon
          name="plus"
          size={30}
          color="#000"
        />
      </IconHeader>
    </IconsHeader>

  ),
});
