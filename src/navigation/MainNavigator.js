import React from 'react';
import {
  createStackNavigator, createAppContainer, createSwitchNavigator,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AuthLoading,
  Login,
  Cadastro,
  Abertura,
  Recuperacao,
  Disciplinas,
  Historico,
  Questionarios,
  Profile,
} from '../screens';

const appNavigator = createMaterialBottomTabNavigator({
  Disciplinas: {
    screen: Disciplinas,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} size={24} name="text-subject" />
      ),
    },
  },
  Questionarios: {
    screen: Questionarios,
    navigationOptions: {
      title: 'Quizzes',
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} size={24} name="forum" />
      ),
    },
  },
  Historico: {
    screen: Historico,
    navigationOptions: {
      title: 'Histórico',
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} size={24} name="history" />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Perfil',
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} size={24} name="account" />
      ),
    },
  },
}, {
  initialRouteName: 'Disciplinas',
  activeColor: '#059451',
  inactiveColor: '#646464',
  barStyle: { backgroundColor: '#fff' },
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
  initialRouteName: 'authLoading',
});

export default createAppContainer(rootNavigator);
