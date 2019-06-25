import React from 'react';
import {
  View, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container, Header, Photo, Name, Menu, Option, OptionTextIcon, TextOption,
} from './styles';

export default function Profile() {
  return (
    <View>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" animated />
      <Container>
        <Header>
          <Photo
            source={{ uri: 'https://files.incrivel.club/files/news/part_71/715010/7826360-image-crop-1517x1585-1544022651-728-1680c03dbb-1545057856.jpg' }}
          />
          <Name>João Santana</Name>
        </Header>
        <Menu>
          <Option>
            <OptionTextIcon>
              <Icon color="#4F4F4F" name="account-edit" size={30} />
              <TextOption>Editar perfil</TextOption>
            </OptionTextIcon>
            <Icon name="chevron-right" size={30} />
          </Option>
          <Option>
            <OptionTextIcon>
              <Icon color="#4F4F4F" name="bell" size={30} />
              <TextOption>Notificações</TextOption>
            </OptionTextIcon>
            <Icon name="chevron-right" size={30} />
          </Option>
          <Option>
            <OptionTextIcon>
              <Icon color="#4F4F4F" name="settings" size={30} />
              <TextOption>Configurações</TextOption>
            </OptionTextIcon>
            <Icon name="chevron-right" size={30} />
          </Option>
          <Option>
            <OptionTextIcon>
              <Icon color="#4F4F4F" name="power-standby" size={30} />
              <TextOption>Sair</TextOption>
            </OptionTextIcon>
          </Option>
        </Menu>
      </Container>
    </View>
  );
}
