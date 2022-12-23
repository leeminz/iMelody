import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ALL_NATION,
  BOTTOM_TABBAR,
  CATEGORY,
  LIST_TOPIC_CATEGORY,
  LIST_TOPIC_NATION,
  SEARCH,
  SELECT_NATION,
  STACK_PODCAST,
  TOPIC_DETAIL,
  TRACK_PLAYER_VIEW,
} from '../routeName';
import TabNavigator from '../tab-navigator';
import {
  AllNation,
  Category,
  ListTopicCategory,
  ListTopicNation,
  Search,
  SelectNation,
  TopicDetail,
  TrackPlayerView,
} from '@screens';
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {useDispatch, useSelector} from 'react-redux';
import {resetApp, RootState} from '@redux';
import {AdmobBanner, RadioCenter} from '@component';
import {showMessage} from 'react-native-flash-message';
import {ic_notification} from '@assets';
import {AppAPI, GlobalService} from '@services';
import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';
import {Alert, BackHandler, Linking} from 'react-native';
import {useInterstitialAd} from '@react-native-admob/admob';
import {ADMOB_IDS} from '@util';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const StackRadio = () => {
  const app = useSelector((state: RootState) => state.app);
  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        {/* {app.first_open && (
          <Stack.Screen name={SELECT_NATION} component={SelectNation} />
        )} */}
        <Stack.Screen name={STACK_PODCAST} component={StackPodcast} />
        <Stack.Screen
          name={TRACK_PLAYER_VIEW}
          component={TrackPlayerView}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </>
  );
};

const StackPodcast = () => {
  const dispatch = useDispatch();
  const playerState = usePlaybackState();
  const app = useSelector((state: RootState) => state.app);
  const events = [Event.PlaybackError];
  const {adLoaded, adDismissed, adLoadError, show, load} = useInterstitialAd(
    ADMOB_IDS.interstitial,
  );

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackError) {
      showMessage({
        message: 'Something when wrong! Please try again later!',
        type: 'danger',
      });
      TrackPlayer.reset();
    }
  });

  useEffect(() => {
    console.log('Try to show ad');
    if (adLoaded) {
      show();
    }
  }, [app.track, app.nation, app.language]);

  useEffect(() => {
    if (adDismissed) {
      setTimeout(() => {
        console.log('Load ad for ad close event');
        load();
      }, 120000);
    }
  }, [adDismissed]);

  useEffect(() => {
    console.log('Error', adLoadError);
    if (adLoadError !== undefined) {
      setTimeout(() => {
        console.log('Load ad for ad load error event');
        load();
      }, 120000);
    }
  }, [adLoadError]);

  useEffect(() => {
    // NetInfo.fetch().then(state => {
    //   if (state.isConnected) {
    //     checkSystemChange();
    //   }
    // });

    const openPlayer = async () => {
      await TrackPlayer.setupPlayer({
        waitForBuffer: true,
        playBuffer: 5,
      });
    };
    openPlayer();
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      icon: ic_notification,
    });
  }, []);

  const checkSystemChange = async () => {
    // Check if database change or app update new version
    GlobalService.showLoading();
    try {
      const response = await AppAPI.checkSystemChange();
      const data = response?.data;
      GlobalService.hideLoading();
      if (data?.success) {
        if (data?.data?.version !== DeviceInfo.getVersion()) {
          if (data?.data?.change_redux) {
            dispatch(resetApp());
          }
          Alert.alert(
            'Warning',
            'You are not up to date, please update the application!',
            [
              {
                text: 'Cancel',
                onPress: () => BackHandler.exitApp(),
                style: 'default',
              },
              {
                text: 'OK',
                onPress: () => {
                  BackHandler.exitApp(),
                    Linking.openURL(
                      `market://details?id=${DeviceInfo.getBundleId()}`,
                    );
                },
                style: 'default',
              },
            ],
          );
        }
      }
    } catch (error) {
      GlobalService.hideLoading();
    }
  };

  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={BOTTOM_TABBAR} component={TabNavigator} />
        <Stack.Screen name={CATEGORY} component={Category} />
        <Stack.Screen
          name={LIST_TOPIC_CATEGORY}
          component={ListTopicCategory}
        />
        <Stack.Screen name={LIST_TOPIC_NATION} component={ListTopicNation} />
        <Stack.Screen name={TOPIC_DETAIL} component={TopicDetail} />
        <Stack.Screen name={ALL_NATION} component={AllNation} />
        <Stack.Screen
          name={SEARCH}
          component={Search}
          options={{animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
      {playerState !== State.Stopped && <RadioCenter track={app.track} />}
      <AdmobBanner />
    </>
  );
};

export {StackRadio, StackPodcast};
