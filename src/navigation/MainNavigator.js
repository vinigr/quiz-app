import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Login, Cadastro, Abertura } from '../screens';


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
});

const rootNavigator = createSwitchNavigator({
    autNavigator: {
      screen: autNavigator,
      navigationOptions: {
        header: null
      }
    },
});
  
  
export default createAppContainer(rootNavigator);