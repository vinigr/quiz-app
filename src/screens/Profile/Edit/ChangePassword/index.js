import React, { useState, useEffect } from 'react';

import { Alert } from 'react-native';

import {
  Container, Options, ButtonSave, TextRecuperacao,
} from './styles';

import { TextSave } from '../styles';

import Input from '../../../../components/TextInput';

import api from '../../../../service/api';

export default function ChangePassword({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState();
  const [secureCurrentPassword, setSecureCurrentPassword] = useState(true);
  const [newPassword, setNewPassword] = useState();
  const [secureNewPassword, setSecureNewPassword] = useState(true);

  async function sendEmail() {
    const { email } = navigation.state.params.user.l_auth;

    try {
      await api.put('/forgotPassword', {
        email,
      });

      Alert.alert(
        'Senha',
        `Link de recuperação enviado para ${email}`,
        [
          { text: 'OK' },
        ],
      );
    } catch (error) {
      Alert.alert(
        'Erro',
        `Erro ao enviar email para ${email}`,
        [
          { text: 'OK' },
        ],
      );
    }
  }

  return (
    <Container>
      <Input
        value={currentPassword}
        placeholder="Senha atual"
        iconName="md-lock"
        secureTextEntry={secureCurrentPassword}
        setPasswordVisibility={() => setSecureCurrentPassword(!secureCurrentPassword)}
        onChangeText={e => setCurrentPassword(e)}
        autoCapitalize="none"
        autoCompleteType="password"
        containerBgColor="rgba(192, 192, 192, 0.3)"
        inputStyle={{
          color: '#000',
          fontSize: 13,
          width: '100%',
        }}
      />
      <Input
        value={newPassword}
        placeholder="Nova senha"
        iconName="md-lock"
        secureTextEntry={secureNewPassword}
        setPasswordVisibility={() => setSecureNewPassword(!secureNewPassword)}
        onChangeText={e => setNewPassword(e)}
        autoCapitalize="none"
        autoCompleteType="password"
        containerBgColor="rgba(192, 192, 192, 0.3)"
        inputStyle={{
          color: '#000',
          fontSize: 13,
          width: '100%',
        }}
      />
      <Options>
        <ButtonSave>
          <TextSave>Atualizar senha</TextSave>
        </ButtonSave>
        <TextRecuperacao onPress={sendEmail}>
          Esqueci minha senha
        </TextRecuperacao>
      </Options>
    </Container>
  );
}
