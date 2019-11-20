import React, {useState, useEffect} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Photo,
  Name,
  Menu,
  Option,
  OptionTextIcon,
  TextOption,
} from './styles';

import Loading from '../../components/Loading';

import imagePerson from '../../assets/images/default-person.png';

import AuthService from '../../service/auth';
import NotificationService from '../../service/notification';

import api from '../../service/api';

export default function Profile(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get('/user');
        await setUser(result.data);
        return setLoading(false);
      } catch (error) {
        return console.tron.log(error.response);
      }
    };

    fetchData();
  }, []);

  async function logout() {
    try {
      const userNotification = await NotificationService();
      if (!userNotification) {
        return;
      }
      await api.post('/logout', {
        userNotification,
      });

      AuthService.logout(props);
    } catch (error) {
      console.tron.log(error);
    }
  }

  return (
    <ScrollView>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header>
              <Photo source={user.path ? {uri: user.path} : imagePerson} />
              <Name>{user.name}</Name>
            </Header>
            <Menu>
              <Option
                onPress={() =>
                  props.navigation.navigate('EditProfile', {user})
                }>
                <OptionTextIcon>
                  <Icon color="#4F4F4F" name="account-edit" size={30} />
                  <TextOption>Editar perfil</TextOption>
                </OptionTextIcon>
                <Icon name="chevron-right" size={30} />
              </Option>
              {/* <Option>
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
              </Option> */}
              <Option onPress={logout}>
                <OptionTextIcon>
                  <Icon color="#4F4F4F" name="exit-to-app" size={30} />
                  <TextOption>Sair</TextOption>
                </OptionTextIcon>
              </Option>
            </Menu>
          </>
        )}
      </Container>
    </ScrollView>
  );
}
