import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StatusBar, Text, TextInput} from 'react-native';
import {store, persistor} from '@redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationApp, NavigationUtils} from '@navigation';
import {
  ADMOB_IDS,
  appName,
  formatDateData,
  formatDateForSchedule,
  isIos,
  shortName,
} from '@util';
import {GlobalUI} from '@component';
import {GlobalService} from '@services';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import DeviceInfo from 'react-native-device-info';
import FlashMessage from 'react-native-flash-message';
import {AppOpenAdProvider} from '@react-native-admob/admob';
import {Splash} from './Splash';
import remoteConfig from '@react-native-firebase/remote-config';

remoteConfig()
  .setDefaults({
    awesome_new_feature: 'disabled',
  })
  .then(() => remoteConfig().fetchAndActivate())
  .then(fetchedRemotely => {
    if (fetchedRemotely) {
      console.log('Configs were retrieved from the backend and activated.');
    } else {
      console.log(
        'No configs were fetched from the backend, and the local configs were already activated',
      );
    }
  });

if (isIos) {
  Text.defaultProps = {};
  Text.defaultProps.maxFontSizeMultiplier = 1.0;
  TextInput.defaultProps = {};
  TextInput.defaultProps.maxFontSizeMultiplier = 1.0;
} else {
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  Text.defaultProps.maxFontSizeMultiplier = 1.0;
  TextInput.defaultProps.maxFontSizeMultiplier = 1.0;
}

if (isIos) {
  PushNotificationIOS.requestPermissions({
    alert: true,
    badge: true,
    sound: true,
    critical: true,
  }).then(
    data => {
      console.log('PushNotificationIOS.requestPermissions', data);
      PushNotificationIOS.removeAllPendingNotificationRequests();
      PushNotificationIOS.addNotificationRequest({
        id: 'radio_online',
        title: appName,
        body: "Don't miss out on today's top news and music trends",
        fireDate: formatDateForSchedule(formatDateData(new Date())),
        repeats: true,
        repeatsComponent: {
          hour: true,
          minute: true,
        },
        isCritical: true,
      });
    },
    data => {
      console.log('PushNotificationIOS.requestPermissions failed', data);
    },
  );
} else {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });

  PushNotification.cancelAllLocalNotifications();

  PushNotification.createChannel(
    {
      channelId: 'radio_online',
      channelName: shortName,
      playSound: true,
      soundName: 'default',
      vibrate: true,
    },
    created => console.log(`createChannel returned '${created}'`),
  );

  const brand = DeviceInfo.getBrand();

  PushNotification.localNotificationSchedule({
    channelId: 'radio_online',
    title: appName,
    message: "Don't miss out on today's top news and music trends",
    date: formatDateForSchedule(formatDateData(new Date())),
    repeatType: 'day',
    allowWhileIdle: true,
    vibration: 2000,
    largeIcon: 'ic_launcher_foreground',
    smallIcon: brand == 'Redmi' || brand == 'Xiaomi' ? 'ic_notification' : '',
  });
}

const App = () => {
  const [splashDismissed, setSplashDismissed] = useState(false);
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <AppOpenAdProvider
          unitId={ADMOB_IDS.open_app}
          options={{showOnColdStart: true, loadOnDismissed: false}}>
          <PersistGate loading={null} persistor={persistor}>
            {splashDismissed ? (
              <NavigationApp
                ref={(navigatorRef: any) =>
                  NavigationUtils.setTopLevelNavigator(navigatorRef)
                }
              />
            ) : (
              <Splash onSplashDismissed={() => setSplashDismissed(true)} />
            )}
          </PersistGate>
        </AppOpenAdProvider>
      </Provider>
      <FlashMessage position="top" floating={true} hideStatusBar={false} />
      <GlobalUI ref={GlobalService.globalUIRef} />
    </>
  );
};

export default App;
