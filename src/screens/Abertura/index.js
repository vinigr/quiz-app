import React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import Fonts from '../../utils/fonts';


const Abertura = props => (
  <View style={styles.container}>
    <View style={styles.titleView}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo</Text>
    </View>
    <View style={styles.inputs}>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Cadastro')}><Text style={styles.text}>Cadastrar</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
    </View>
  </View>

);

export default Abertura;

const styles = StyleSheet.create({
  container: {
    // padding: 15,
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#059451',
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  titleView: {
    alignItems: 'center',
    height: '35%',
    justifyContent: 'flex-end',
  },
  title: {
    // marginTop: 30,
    // marginBottom: 20,
    color: '#fff',
    fontFamily: Fonts.RubikMedium,
    fontSize: 40,
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
    marginTop: 10,
    height: 50,
    width: '75%',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontFamily: Fonts.RubikRegular,
  },
});
