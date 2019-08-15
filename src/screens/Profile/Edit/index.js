import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Title, ViewImage, Photo, EditPhoto, ViewInputs,
  ViewButtons, ButtonSave, ButtonCancel, TextCancel,
  TextSave, TextPassword,
} from './styles';

import Input from '../../../components/TextInput';

import imagePerson from '../../../assets/images/default-person.png';


export default function Edit(props) {
  useEffect(() => {
    console.tron.log(props);
  }, []);
  return (
    <Container>
      <Title>Editar perfil</Title>
      <ViewImage>
        <Photo
          source={imagePerson}
        />
        <EditPhoto>
          <Icon name="edit" size={18} color="#000" />
        </EditPhoto>
      </ViewImage>
      <ViewInputs>
        <Input
        // value={name}
          placeholder="Nome completo"
          iconName="md-person"
        // onChangeText={e => setName(e)}
          autoCapitalize="words"
          containerBgColor="rgba(192, 192, 192, 0.3)"
        />
        <Input
        // value={email}
          placeholder="Email"
          iconName="md-mail"
        // onChangeText={e => setEmail(e)}
          autoCapitalize="none"
          autoCompleteType="email"
          containerBgColor="rgba(192, 192, 192, 0.3)"
          inputStyle={{
            color: '#000',
            fontSize: 13,
            width: '100%',
          }}
        />
        <TextPassword>Alterar senha</TextPassword>
      </ViewInputs>
      <ViewButtons>
        <ButtonCancel onPress={() => props.navigation.goBack()}>
          <TextCancel>Cancelar</TextCancel>
        </ButtonCancel>
        <ButtonSave>
          <TextSave>Salvar alterações</TextSave>
        </ButtonSave>
      </ViewButtons>
    </Container>
  );
}
