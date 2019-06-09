import React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import Fonts from '../../utils/fonts';
import Input from '../../components/TextInput';


function Recuperacao() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Recupere sua senha</Text>
        <View style={styles.inputs}>
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
        </View>
        <TouchableOpacity style={styles.button}><Text style={styles.text}>Enviar</Text></TouchableOpacity>
      </View>
    </View>
  );
}

export default Recuperacao;

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
    fontSize: 30,
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
    marginTop: 5,
    marginBottom: 25,
    height: 50,
    width: '99%',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontFamily: Fonts.RubikRegular,
  },
});
