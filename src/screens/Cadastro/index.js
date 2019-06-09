import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Picker,
} from 'react-native';
// import { Picker } from 'native-base';
import Fonts from '../../utils/fonts';
import Input from '../../components/TextInput';


export default class Cadastro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Cadastro</Text>
          <View style={styles.inputs}>
            <Input
              placeholder="Nome completo"
              iconName="md-person"
            // secureTextEntry={this.state.secureText}
            // setPasswordVisibility={() => this.setPasswordVisibility()}
            // onChangeText={(pwd) => this.setState({ password: pwd })}
              containerBgColor="rgba(192, 192, 192, 0.5)"
              inputStyle={{
                color: '#000',
                fontSize: 13,
              }}
            />
            <Input
              placeholder="Email"
              iconName="md-mail"
            // secureTextEntry={this.state.secureText}
            // setPasswordVisibility={() => this.setPasswordVisibility()}
            // onChangeText={(pwd) => this.setState({ password: pwd })}
              containerBgColor="rgba(192, 192, 192, 0.5)"
              inputStyle={{
                color: '#000',
                fontSize: 13,
              }}
            />
            <Input
              placeholder="Senha"
              iconName="md-lock"
            // secureTextEntry={this.state.secureText}
            // setPasswordVisibility={() => this.setPasswordVisibility()}
            // onChangeText={(pwd) => this.setState({ password: pwd })}
              containerBgColor="rgba(192, 192, 192, 0.5)"
              inputStyle={{
                color: '#fff',
                fontSize: 13,
              }}
            />
            <Picker
              // selectedValue={this.state.language}
              // placeholder='Curso'
              style={{ height: 50, width: '99%', backgroundColor: 'rgba(192, 192, 192, 0.5)' }}
              onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="Curso" value="curso" />
              <Picker.Item label="Sistemas de Informação" value="si" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.button}><Text style={styles.text}>Cadastrar</Text></TouchableOpacity>
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
