import axios from 'axios';
import AuthService from './auth';

const api = axios.create({
  baseURL: 'http://192.168.0.116:3110',
});

api.interceptors.request.use(async (config) => {
  const token = await AuthService.getToken();
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

export default api;
