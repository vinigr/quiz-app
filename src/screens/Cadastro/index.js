import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { Button, TitleAuth } from '../../styles';
import Fonts from '../../utils/fonts';
import Input from '../../components/TextInput';


export default class Cadastro extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    secureText: true,
    error: null,
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
          <TitleAuth>Cadastro</TitleAuth>
          <View style={styles.inputs}>
            <Input
              placeholder="Nome completo"
              iconName="md-person"
              onChangeText={name => this.setState({ name })}
              autoCapitalize="words"
              containerBgColor="rgba(192, 192, 192, 0.5)"
              inputStyle={{
                color: '#000',
                fontSize: 13,
                width: '100%',
              }}
            />
            <Input
              value={this.state.email}
              placeholder="Email"
              iconName="md-mail"
              onChangeText={email => this.setState({ email })}
              autoCapitalize="none"
              containerBgColor="rgba(192, 192, 192, 0.5)"
              inputStyle={{
                color: '#000',
                fontSize: 13,
                width: '100%',
              }}
            />
            <Input
              value={this.state.password}
              placeholder="Senha"
              iconName="md-lock"
              secureTextEntry={this.state.secureText}
              autoCapitalize="none"
              setPasswordVisibility={() => this.setPasswordVisibility()}
              onChangeText={password => this.setState({ password })}
              containerBgColor="rgba(192, 192, 192, 0.5)"
              inputStyle={{
                color: '#000',
                fontSize: 13,
                width: '100%',
              }}
            />
          </View>
          <Button>
            <Text style={styles.text}>Cadastrar</Text>
          </Button>
        </View>

        <View style={{ display: 'flex', bottom: 0, alignItems: 'center' }}>
          <Text style={{ fontSize: 16 }}>Já possui conta?</Text>
          <Text style={{ fontSize: 18, textDecorationLine: 'underline', color: '#000' }} onPress={() => this.props.navigation.replace('Login')}>Entre</Text>
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
