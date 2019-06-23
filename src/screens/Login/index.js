import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Button, TitleAuth } from '../../styles';
import Fonts from '../../utils/fonts';
import Input from '../../components/TextInput';
import api from '../../service/api';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    secureText: true,
    error: null,
  };

  handleSubmit = async () => {
    const { email, password } = this.state;
    try {
      const token = await api.post('/signin', {
        email,
        password,
      });
      console.tron.log(token);
    } catch (err) {
      console.tron.log(`Erro:${err}`);
    }
    // await AsyncStorage.setItem('@quizApp:token', token);
    // this.props.navigation.navigate('appNavigator')
  };

  setPasswordVisibility() {
    const { secureText } = this.state;
    this.setState({
      secureText: !secureText,
    });
  }

  render() {
    const { email, password, secureText } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <TitleAuth>Login</TitleAuth>
          <View style={styles.inputs}>
            <Input
              value={email}
              placeholder="Email"
              iconName="md-mail"
              onChangeText={email => this.setState({ email })}
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
              setPasswordVisibility={() => this.setPasswordVisibility()}
              onChangeText={passwordText => this.setState({ password: passwordText })}
              autoCapitalize="none"
              autoCompleteType="password"
              containerBgColor="rgba(192, 192, 192, 0.5)"
              inputStyle={{
                color: '#000',
                fontSize: 13,
                width: '100%',
              }}
            />
          </View>
          <View style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Text
              style={{
                fontFamily: Fonts.RubikRegular,
                fontSize: 15,
                marginTop: 3,
              }}
              onPress={() => this.props.navigation.navigate('Recuperacao')}
            >
              Esqueci minha senha
            </Text>
          </View>
          <Button onPress={this.handleSubmit}>
            <Text style={styles.text}>Entrar</Text>
          </Button>
        </View>

        <View style={{ display: 'flex', bottom: 0, alignItems: 'center' }}>
          <Text style={{ fontSize: 16 }}>Ainda não tem uma conta?</Text>
          <Text
            style={{
              fontSize: 18,
              textDecorationLine: 'underline',
              color: '#000',
            }}
            onPress={() => this.props.navigation.replace('Cadastro')}
          >
            Cadastre-se
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: '100%',
    justifyContent: 'space-between',
  },
  inputs: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontFamily: Fonts.RubikRegular,
  },
});
