import React, {useEffect} from 'react';

import AuthService from '../../service/auth';

import Loading from '../../components/Loading';

export default function AuthLoading(props) {
  useEffect(() => {
    verifyToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function verifyToken() {
    const auth = await AuthService.loggedIn();
    props.navigation.navigate(auth ? 'appNavigator' : 'authNavigator');
  }

  return <Loading />;
}
