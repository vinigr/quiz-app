import React, { useState } from 'react';

import { Text, View } from 'react-native';

import {
  Button, TitleAuth, ViewError, TextError,
} from '../../styles';
import {
  Container,
  ViewInputs,
  ViewRecuperacao,
  TextRecuperacao,
  TextButton,
  ViewCadastro,
  TextCadastro,
} from './styles';

import Input from '../../components/TextInput';
import api from '../../service/api';
import AuthService from '../../service/auth';
import NotificationService from '../../service/notification';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState(null);

  async function handleSubmit() {
    setError(null);
    if (!email || !password || email === '' || password === '') return setError('Dados insuficientes');
    const userNotification = await NotificationService();

    console.tron.log(userNotification);

    if (typeof userNotification !== 'string') return setError('Error type notification');

    try {
      const token = await api.post('/signin', {
        email,
        password,
        userNotification,
      });
      await AuthService.setToken(token.data.token);
      return props.navigation.navigate('appNavigator');
    } catch (err) {
      return setError(err.response.data.message);
    }
  }

  function setPasswordVisibility() {
    setSecureText(!secureText);
  }

  return (
    <Container>
      <View>
        <TitleAuth>Login</TitleAuth>
        {error && (
          <ViewError>
            <TextError>{error}</TextError>
          </ViewError>
        )}
        <ViewInputs>
          <Input
            value={email}
            placeholder="Email"
            iconName="md-mail"
            onChangeText={e => setEmail(e)}
            autoCapitalize="none"
            autoCompleteType="email"
            containerBgColor="rgba(192, 192, 192, 0.5)"
            inputStyle={{
              color: '#000',
              fontSize: 13,
              width: '100%',
            }}
          />
          <Input
            value={password}
            placeholder="Senha"
            iconName="md-lock"
            secureTextEntry={secureText}
            setPasswordVisibility={() => setPasswordVisibility()}
            onChangeText={e => setPassword(e)}
            autoCapitalize="none"
            autoCompleteType="password"
            containerBgColor="rgba(192, 192, 192, 0.5)"
            inputStyle={{
              color: '#000',
              fontSize: 13,
              width: '100%',
            }}
          />
        </ViewInputs>
        <ViewRecuperacao>
          <TextRecuperacao onPress={() => props.navigation.navigate('Recuperacao')}>
            Esqueci minha senha
          </TextRecuperacao>
        </ViewRecuperacao>
        <Button onPress={handleSubmit}>
          <TextButton>Entrar</TextButton>
        </Button>
      </View>

      <ViewCadastro>
        <Text style={{ fontSize: 16 }}>Ainda não tem uma conta?</Text>
        <TextCadastro onPress={() => props.navigation.replace('Cadastro')}>
          Cadastre-se
        </TextCadastro>
      </ViewCadastro>
    </Container>
  );
}
