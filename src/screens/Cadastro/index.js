import React, { useState } from 'react';

import {
  View,
} from 'react-native';
import { Button, TitleAuth } from '../../styles';
import Input from '../../components/TextInput';
import {
  Container, ViewInputs, TextButton, ViewLogin, TextConta, TextLogin,
} from './styles';

export default function Cadastro(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState(null);

  function setPasswordVisibility() {
    setSecureText(!secureText);
  }

  return (
    <Container>
      <View>
        <TitleAuth>Cadastro</TitleAuth>
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
        <Button>
          <TextButton>Cadastrar</TextButton>
        </Button>
      </View>

      <ViewLogin>
        <TextConta>Já possui conta?</TextConta>
        <TextLogin onPress={() => props.navigation.replace('Login')}>Entre</TextLogin>
      </ViewLogin>
    </Container>
  );
}
