import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

export default class AuthLoading extends Component {
    componentDidMount = async () => {
      const userToken = await AsyncStorage.getItem('userToken');


      this.props.navigation.navigate(userToken ? 'AppNavigator' : 'AuthNavigator');
    };

    render() {
      return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
}
