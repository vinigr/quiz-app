import decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = '@queston-Token';

const AuthService = {
  setToken(token) {
    AsyncStorage.setItem(TOKEN_KEY, token);
  },

  async loggedIn() {
    const token = await this.getToken();
    return !!token && !this.isTokenExpired(token);
  },

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  },

  getToken() {
    return AsyncStorage.getItem(TOKEN_KEY);
  },

  logout(props) {
    AsyncStorage.removeItem(TOKEN_KEY);
    props.navigation.navigate('authNavigator');
  },

  getProfile() {
    return decode(this.getToken());
  },

  getRole() {
    return this.getProfile().role;
  },
};

export default AuthService;
