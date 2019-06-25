import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../service/api';

export default class AuthLoading extends Component {
  state={
    loading: true,
  }

  componentDidMount = async () => {
    const userToken = await AsyncStorage.getItem('@QuizApp:token');
    if (userToken) {
      const user = await api.post('/verify', {
        token: userToken,
      });
      if (user.data.auth === false) return this.props.navigation.navigate('authNavigator');
      this.props.navigation.navigate('appNavigator');
    } else {
      this.props.navigation.navigate('authNavigator');
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <View>
        {loading ? <ActivityIndicator /> : <View />}

        {/* <StatusBar barStyle="default" /> */}
      </View>
    );
  }
}
