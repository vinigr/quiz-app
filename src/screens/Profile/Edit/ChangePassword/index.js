import React, { useState } from 'react';

import { Alert } from 'react-native';

import {
  Container, Options, ButtonSave, TextRecuperacao,
} from './styles';

import { ViewError, TextError, TextSuccess } from '../../../../styles';

import { TextSave } from '../styles';

import Input from '../../../../components/TextInput';

import api from '../../../../service/api';

export default function ChangePassword({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState();
  const [secureCurrentPassword, setSecureCurrentPassword] = useState(true);
  const [newPassword, setNewPassword] = useState();
  const [secureNewPassword, setSecureNewPassword] = useState(true);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();


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
    } catch (err) {
      Alert.alert(
        'Erro',
        `Erro ao enviar email para ${email}`,
        [
          { text: 'OK' },
        ],
      );
    }
  }

  async function updatePassword() {
    setError(null);
    setSuccess(null);
    if (!currentPassword || !newPassword) return setError('Dados insuficientes!');
    if (currentPassword === newPassword) return setError('Senhas iguais!');

    try {
      await api.put('/changePassword', {
        currentPassword,
        newPassword,
      });

      return setSuccess('Senha alterada com sucesso!');
    } catch (err) {
      if (err.response.data.message) {
        return setError(err.response.data.message);
      }
      return setError('Erro ao atualizar senha!');
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
      {error && <ViewError><TextError>{error}</TextError></ViewError>}
      {success && <ViewError><TextSuccess>{success}</TextSuccess></ViewError>}

      <Options>
        <ButtonSave onPress={updatePassword}>
          <TextSave>Atualizar senha</TextSave>
        </ButtonSave>
        <TextRecuperacao onPress={sendEmail}>
          Esqueci minha senha
        </TextRecuperacao>
      </Options>
    </Container>
  );
}
