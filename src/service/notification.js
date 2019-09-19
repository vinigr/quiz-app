import OneSignal from 'react-native-onesignal';

export default async () => new Promise(async (res, rej) => {
  OneSignal.getPermissionSubscriptionState((status) => {
    if (status.userId) {
      res(status.userId);
    } else {
      rej(new Error('Cant receive a token'));
    }
  });
});
