import React from 'react';

import {
  Container, Header, ImageLogo, Title, InputView, Button, TextButton,
} from './styles';


const Abertura = props => (
  <Container>
    <Header>
      <ImageLogo
        source={require('../../assets/images/logo.png')}
      />
      <Title>Bem-vindo</Title>
    </Header>
    <InputView>
      <Button onPress={() => props.navigation.navigate('Cadastro')}>
        <TextButton>Cadastrar</TextButton>
      </Button>
      <Button onPress={() => props.navigation.navigate('Login')}>
        <TextButton>Entrar</TextButton>
      </Button>
    </InputView>
  </Container>
);

export default Abertura;
