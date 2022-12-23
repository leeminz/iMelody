/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import _i18n from './src/util/i18n';
import TrackPlayer from 'react-native-track-player';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => require('./service'));
