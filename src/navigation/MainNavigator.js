import React from 'react';
import {
  createStackNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator,
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
  Quizzes,
  Pessoas,
  Historico,
  Questionarios,
  Profile,
  Edit,
} from '../screens';

const Disciplina = createMaterialTopTabNavigator({
  Quizzes: {
    screen: Quizzes,
    navigationOptions: {
      title: 'Questionários',
    },
  },
  Pessoas: {
    screen: Pessoas,
    navigationOptions: {

    },
  },
}, {
  initialRouteName: 'Quizzes',
  tabBarOptions: {
    upperCaseLabel: false,
    labelStyle: {
      fontFamily: 'Rubik-Medium',
    },
    style: {
      backgroundColor: '#0ECF80',
    },
    indicatorStyle: {
      backgroundColor: '#0C8554',
    },
  },
});


const stackDisciplinas = createStackNavigator({
  Disciplinas: {
    screen: Disciplinas,
    navigationOptions: {
      header: null,
    },
  },
  Disciplina: {
    screen: Disciplina,
    navigationOptions: {
      header: null,
    },
  },
});

const stackProfile = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
  EditProfile: {
    screen: Edit,
    navigationOptions: {
      header: null,
    },
  },
}, {
  initialRouteName: 'EditProfile',
});


const appNavigator = createMaterialBottomTabNavigator({
  Disciplinas: {
    screen: stackDisciplinas,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} size={24} name="application" />
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
    screen: stackProfile,
    navigationOptions: {
      title: 'Perfil',
      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} size={24} name="account" />
      ),
    },
  },
}, {
  initialRouteName: 'Profile',
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
