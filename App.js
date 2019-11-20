import React, {Component} from 'react';
import OneSignal from 'react-native-onesignal';
import SplashScreen from 'react-native-splash-screen';
import NavigationRoot from './src/navigation/MainNavigator';
import {NetworkProvider} from './src/service/NetworkProvider';
import './ReactotronConfig';

export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init('861ffbdb-a413-413d-a0e9-dc4ff86072f9');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  render() {
    return (
      <NetworkProvider>
        <NavigationRoot />
      </NetworkProvider>
    );
  }
}
