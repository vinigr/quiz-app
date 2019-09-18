import AsyncStorage from '@react-native-community/async-storage';
import OneSignal from 'react-native-onesignal';

const ID_ONE_SIGNAL = '@id-onesignal';

const NotificationService = {
  async setIdNotification() {
    await OneSignal.getPermissionSubscriptionState((status) => {
      AsyncStorage.setItem(ID_ONE_SIGNAL, status.userId);
    });
  },

  async getIdNotification() {
    const id = await AsyncStorage.getItem(ID_ONE_SIGNAL);
    return id;
  },
};

export default NotificationService;
