import React from 'react';
import {
  View, StyleSheet, TextInput, TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = props => (
  <View style={[styles.container, { backgroundColor: props.containerBgColor }]}>
    <View style={styles.iconContainer}>
      <Icon name={props.iconName} size={19} color="#000" />
    </View>
    <TextInput
      style={props.inputStyle}
      placeholder={props.placeholder}
      placeholderTextColor="#000"
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    />
    {props.placeholder === 'Senha' && (
      <TouchableHighlight
        style={styles.rightIconContainer}
        onPress={props.setPasswordVisibility}
        underlayColor="transparent"
      >
        <Icon
          name={props.secureTextEntry ? 'md-eye-off' : 'md-eye'}
          size={19}
          color="#000"
        />
      </TouchableHighlight>
    )}
  </View>
);
export default Input;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '99%',
    height: 50,
    marginBottom: 10,
  },
  iconContainer: {
    width: 30,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconContainer: {
    position: 'absolute',
    right: 10,
  },
});
