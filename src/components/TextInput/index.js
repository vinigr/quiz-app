import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container, IconContainer, TextInput, TouchableSecure,
} from './styles';

const Input = ({
  containerBgColor,
  iconName,
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  autoCapitalize,
  setPasswordVisibility,
}) => (
  <Container containerBgColor={containerBgColor}>
    <IconContainer>
      <Icon name={iconName} size={19} color="#000" />
    </IconContainer>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#000"
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
    />
    {placeholder === 'Senha' && (
      <TouchableSecure
        onPress={setPasswordVisibility}
        underlayColor="transparent"
      >
        <Icon
          name={secureTextEntry ? 'md-eye-off' : 'md-eye'}
          size={19}
          color="#000"
        />
      </TouchableSecure>
    )}
  </Container>
);

export default Input;
