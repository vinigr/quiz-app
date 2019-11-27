import React, {useState} from 'react';

import {View} from 'react-native';
import {Button, TitleAuth, ViewError, TextError} from '../../styles';
import Input from '../../components/TextInput';
import {
  Container,
  ViewInputs,
  TextButton,
  ViewLogin,
  TextConta,
  TextLogin,
} from './styles';

import api from '../../service/api';
import AuthService from '../../service/auth';
import NotificationService from '../../service/notification';

export default function Cadastro(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState(null);

  function setPasswordVisibility() {
    setSecureText(!secureText);
  }

  async function handleSubmit() {
    setError(null);
    if (
      !name ||
      name === '' ||
      !email ||
      !password ||
      email === '' ||
      password === ''
    ) {
      return setError('Dados insuficientes');
    }
    const userNotification = await NotificationService();

    if (!userNotification) {
      return setError('Erro ao buscar id de notificações do aparelho!');
    }
    try {
      const token = await api.post('/signup', {
        name,
        email,
        password,
        userNotification,
      });
      await AuthService.setToken(token.data.token);
      return props.navigation.navigate('appNavigator');
    } catch (err) {
      console.log(err.response.data.message);
      return setError(err.response.data.message);
    }
  }

  return (
    <Container>
      <View>
        <TitleAuth>Cadastro</TitleAuth>
        {error && (
          <ViewError>
            <TextError>{error}</TextError>
          </ViewError>
        )}
        <ViewInputs>
          <Input
            value={name}
            placeholder="Nome completo"
            iconName="md-person"
            onChangeText={e => setName(e)}
            autoCapitalize="words"
            containerBgColor="rgba(192, 192, 192, 0.5)"
          />
          <Input
            value={email}
            placeholder="Email"
            iconName="md-mail"
            onChangeText={e => setEmail(e)}
            autoCapitalize="none"
            containerBgColor="rgba(192, 192, 192, 0.5)"
          />
          <Input
            value={password}
            placeholder="Senha"
            iconName="md-lock"
            secureTextEntry={secureText}
            autoCapitalize="none"
            setPasswordVisibility={setPasswordVisibility}
            onChangeText={e => setPassword(e)}
            containerBgColor="rgba(192, 192, 192, 0.5)"
          />
        </ViewInputs>
        <Button onPress={handleSubmit}>
          <TextButton>Cadastrar</TextButton>
        </Button>
      </View>

      <ViewLogin>
        <TextConta>Já possui conta?</TextConta>
        <TextLogin onPress={() => props.navigation.replace('Login')}>
          Entre
        </TextLogin>
      </ViewLogin>
    </Container>
  );
}
