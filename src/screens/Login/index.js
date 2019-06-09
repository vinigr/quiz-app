import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../../utils/fonts';
import Input from '../../components/TextInput';
import api from '../../service/api';

export default class Login extends Component {
  state = {
    email: '',
    senha: '',
    secureText: true,
    erros: null,
  };

  handleSubmit = async () => {
    const { email, senha } = this.state;
    await api
      .post('/player/signin', {
        email,
        senha,
      })
      .then(() => console.tron.log(token))
      .catch((err) => {
        console.tron.log(`Erro:${err}`);
      });

    // await AsyncStorage.setItem('@quizApp:token', token);
    // this.props.navigation.navigate('appNavigator')
  };

  setPasswordVisibility() {
    this.setState({
      secureText: !this.state.secureText,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputs}>
            <Input
              value={this.state.email}
              placeholder="Email"
              iconName="md-mail"
              onChangeText={email => this.setState({ email })}
              containerBgColor="rgba(192, 192, 192, 0.5)"
              inputStyle={{
                color: '#000',
                fontSize: 13,
              }}
            />
            <Input
              value={this.state.senha}
              placeholder="Senha"
              iconName="md-lock"
              secureTextEntry={this.state.secureText}
              setPasswordVisibility={() => this.setPasswordVisibility()}
              onChangeText={senha => this.setState({ senha })}
              containerBgColor="rgba(192, 192, 192, 0.5)"
              inputStyle={{
                color: '#000',
                fontSize: 13,
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
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
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
  title: {
    marginTop: 30,
    marginBottom: 20,
    color: '#000',
    fontFamily: Fonts.RubikMedium,
    fontSize: 35,
  },
  inputs: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#059451',
    marginTop: 15,
    height: 50,
    width: '99%',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontFamily: Fonts.RubikRegular,
  },
});
