import React, { useEffect } from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import AuthService from '../../service/auth';

export default function AuthLoading(props) {
  useEffect(() => {
    verifyToken();
  }, []);

  async function verifyToken() {
    const auth = await AuthService.loggedIn();
    props.navigation.navigate(auth ? 'appNavigator' : 'authNavigator');
  }

  return (
    <ActivityIndicator />
  );
}
