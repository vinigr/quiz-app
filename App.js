import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';
import NavigationRoot from './src/navigation/MainNavigator';
import './ReactotronConfig';
import NotificationService from './src/service/notification';

export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init('861ffbdb-a413-413d-a0e9-dc4ff86072f9');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);

    !this.verifyId && NotificationService.setIdNotification();
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  verifyId = async () => {
    const id = await NotificationService.getIdNotification();
    if (!id) return false;
    return true;
  };

  render() {
    return <NavigationRoot />;
  }
}
