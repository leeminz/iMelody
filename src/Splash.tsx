import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useAppOpenAd} from '@react-native-admob/admob';

const Splash = (props: {onSplashDismissed: any}) => {
  const [loaded, setLoaded] = useState(false);
  const {adDismissed, adLoadError, adPresentError} = useAppOpenAd();

  useEffect(() => {
    const load = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoaded(true);
    };
    load();
  }, []);

  useEffect(() => {
    async function hide() {
      props.onSplashDismissed();
      SplashScreen.hide();
    }
    if (loaded && (adDismissed || adLoadError || adPresentError)) {
      hide();
    }
  }, [
    loaded,
    adDismissed,
    adLoadError,
    adPresentError,
    props.onSplashDismissed,
  ]);

  return <View />;
};

export {Splash};
