import AsyncStorage from '@react-native-community/async-storage';
import OneSignal from 'react-native-onesignal';

const ID_ONE_SIGNAL = '@id-onesignal';

const NotificationService = {
  setIdNotification() {
    OneSignal.getPermissionSubscriptionState((status) => {
      AsyncStorage.setItem(ID_ONE_SIGNAL, status.userId);
    });
  },

  async getIdNotification() {
    return AsyncStorage.getItem(ID_ONE_SIGNAL);
  },
};

export default NotificationService;
