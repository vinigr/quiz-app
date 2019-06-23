import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AuthLoading,
  Login,
  Cadastro,
  Abertura,
  Recuperacao,
  Disciplinas,
  Historico,
  Questionarios,
  Notificacoes,
  Profile,
} from '../screens';

const appNavigator = createMaterialBottomTabNavigator({
  Disciplinas: {
    screen: Disciplinas,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon size={24} name="list" />
      ),
    },
  },
  Historico: {
    screen: Historico,
    navigationOptions: {
      title: 'Histórico',
      tabBarIcon: () => (
        <Icon size={24} name="history" />
      ),
    },
  },
  Questionarios: {
    screen: Questionarios,
    navigationOptions: {
      title: 'Quizzes',
      tabBarIcon: () => (
        <Icon size={24} name="question" />
      ),
    },
  },
  Notificacoes: {
    screen: Notificacoes,
    title: 'Notificações',
    navigationOptions: {
      tabBarIcon: () => (
        <Icon size={24} name="bell" />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Perfil',
      tabBarIcon: () => (
        <Icon size={24} name="user" />
      ),
    },
  },
}, {
  initialRouteName: 'Questionarios',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#059451' },
});


const autNavigator = createStackNavigator({
  Abertura: {
    screen: Abertura,
    navigationOptions: {
      header: null,
    },
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Recuperacao: {
    screen: Recuperacao,
    navigationOptions: {
      header: null,
    },
  },
});

const rootNavigator = createSwitchNavigator({
  authLoading: {
    screen: AuthLoading,
  },
  authNavigator: {
    screen: autNavigator,
    navigationOptions: {
      header: null,
    },
  },
  appNavigator: {
    screen: appNavigator,
  },
}, {
  initialRouteName: 'authNavigator',
});


export default createAppContainer(rootNavigator);
