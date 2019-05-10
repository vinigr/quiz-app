import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Login, Registration } from '../screens';


const autNavigator = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Registration: {
      screen: Registration,
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