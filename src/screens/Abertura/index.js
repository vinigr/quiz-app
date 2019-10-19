import React, { useState } from 'react';

import Modal from 'react-native-modal';
import {
  Container,
  Header,
  ImageLogo,
  Title,
  InputView,
  Button,
  TextButton,
  TextButtonQuiz,
  ViewModal,
  Input,
  TextModal,
  ButtonModal,
  TextButtonAdd,
} from './styles';

import { TextError } from '../../styles';

import api from '../../service/api';

export default function Abertura(props) {
  const [modalAdd, setModalAdd] = useState(false);
  const [code, setCode] = useState('');
  const [name, setName] = useState();
  const [quiz, setQuiz] = useState();
  const [error, setError] = useState();

  async function searchQuiz() {
    setError(null);
    try {
      const { data } = await api.get(`/unloggedUser/${code}`);
      console.tron.log(data);
      setQuiz(data.quiz);
    } catch ({ response }) {
      setError(response.data.message);
      console.tron.log(response);
    }
  }

  async function startQuiz() {
    setError(null);
    if (!name) return setError('Nome não informado!');
    if (!quiz) return setError('Quiz não informado!');
    try {
      const { data } = await api.post('/unloggedUser/startQuiz', {
        name,
        quiz,
      });
      setCode(null);
      setQuiz(null);
    } catch ({ response }) {
      setError(response.data.message);
    }
  }

  return (
    <Container>
      <Header>
        <ImageLogo source={require('../../assets/images/logo.png')} />
        <Title>Bem-vindo</Title>
      </Header>
      <InputView>
        <Button onPress={() => props.navigation.navigate('Cadastro')}>
          <TextButton>Cadastrar</TextButton>
        </Button>
        <Button onPress={() => props.navigation.navigate('Login')}>
          <TextButton>Entrar</TextButton>
        </Button>
        <Button onPress={() => setModalAdd(true)}>
          <TextButtonQuiz>Disputar sem logar</TextButtonQuiz>
        </Button>
      </InputView>
      <Modal
        isVisible={modalAdd}
        onBackButtonPress={() => setModalAdd(false)}
        onBackdropPress={() => setModalAdd(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={200}
        backdropTransitionOutTiming={0}
      >
        <ViewModal>
          {!quiz ? (
            <>
              <TextModal>Código do quiz</TextModal>
              <Input
                placeholder="Código"
                maxLength={8}
                autoCapitalize="characters"
                value={code}
                onChangeText={text => setCode(text)}
              />
              {error && <TextError>{error}</TextError>}
              <ButtonModal onPress={() => searchQuiz()}>
                <TextButtonAdd>Buscar</TextButtonAdd>
              </ButtonModal>
            </>
          ) : (
            <>
              <TextModal>Digite seu nome</TextModal>
              <Input placeholder="Nome" value={name} onChangeText={text => setName(text)} />
              {error && <TextError>{error}</TextError>}
              <ButtonModal onPress={() => startQuiz()}>
                <TextButtonAdd>Entrar</TextButtonAdd>
              </ButtonModal>
            </>
          )}
        </ViewModal>
      </Modal>
    </Container>
  );
}
