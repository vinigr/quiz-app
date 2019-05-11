import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Login, Cadastro, Abertura, Recuperacao, Disciplinas, Historico, Questionarios, Notificacoes, Profile } from '../screens';


const appNavigator = createMaterialBottomTabNavigator({
  Disciplinas: {
    screen: Disciplinas,
  },
  Historico: {
    screen: Historico,
  },
  Questionarios: {
    screen: Questionarios,
  },
  Notificacoes: {
    screen: Notificacoes,
  },
  Profile: {
    screen: Profile,
  },
}, {
  initialRouteName: 'Questionarios',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
})


const autNavigator = createStackNavigator({
  Abertura: {
    screen: Abertura,
    navigationOptions: {
      header: null
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Recuperacao: {
    screen: Recuperacao,
    navigationOptions: {
      header: null
    }
  },
});

const rootNavigator = createSwitchNavigator({
    autNavigator: {
      screen: autNavigator,
      navigationOptions: {
        header: null
      }
    },
    appNavigator: {
      screen: appNavigator,
    }
});
  
  
export default createAppContainer(rootNavigator);