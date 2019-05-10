import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Fonts from '../../utils/fonts/';
import Input from '../../components/TextInput/';


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputs}>
        <Input
            placeholder="Email"
            iconName='md-mail'
            // secureTextEntry={this.state.secureText}
            // setPasswordVisibility={() => this.setPasswordVisibility()}
            // onChangeText={(pwd) => this.setState({ password: pwd })}
            containerBgColor='rgba(192, 192, 192, 0.5)'
            inputStyle={{
                color: '#000',
                fontSize: 13
            }} />
          <Input
            placeholder="Password"
            iconName="md-lock"
            // secureTextEntry={this.state.secureText}
            // setPasswordVisibility={() => this.setPasswordVisibility()}
            // onChangeText={(pwd) => this.setState({ password: pwd })}
            containerBgColor='rgba(192, 192, 192, 0.5)'
            inputStyle={{
                color: '#fff',
                fontSize: 13
            }} />
        </View>
        <View style={{ display: 'flex', alignItems: 'flex-end'}}>
          <Text style={{ fontFamily: Fonts.RubikRegular, fontSize: 15, marginTop: 3 }}>Esqueci minha senha</Text>
        </View>
        <TouchableOpacity style={styles.button}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
        <View style={{ display: 'flex', bottom: 0, alignItems: 'center',  }}>
          <Text>Ainda não tem uma conta?</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: '100%',
    justifyContent: 'center',
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
    alignItems: 'center'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#059451',
    marginTop: 15,
    height: 50,
    width: '99%'
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontFamily: Fonts.RubikRegular,
  }
})