import {Platform} from 'react-native';
import moment from 'moment';

const shortName = 'Radio Online';

const appName = 'Radio Online - Talk & Livestream';

const isIos = Platform.OS === 'ios';

const TABBAR_HEIGHT = 150;

const STYLE = {
  hitSlop: {top: 15, bottom: 15, left: 15, right: 15},
};

const ADMOB_IDS = {
  app_id: isIos ? '' : 'ca-app-pub-6445739239297382~8883703868',
  banner: isIos ? '' : 'ca-app-pub-6445739239297382/6995907121',
  interstitial: isIos ? '' : 'ca-app-pub-6445739239297382/7107340344',
  native: isIos ? '' : 'ca-app-pub-6445739239297382/8037278636',
  open_app: isIos ? '' : 'ca-app-pub-6445739239297382/4864320381',
};

const APP_LANGUAGES = [
  {label: 'English', value: 'en'},
  {label: 'Tiếng Việt', value: 'vi'},
  {label: 'Français', value: 'fr'},
  {label: 'Español', value: 'es'},
  {label: 'Русский язык', value: 'ru'},
  {label: '日本語', value: 'ja'},
  {label: '한국인', value: 'ko'},
  {label: 'Deutsch', value: 'de'},
  {label: 'عربي', value: 'ar'},
  {label: 'Bahasa Indo', value: 'id'},
  {label: '中国人', value: 'zh'},
  {label: 'ไทย', value: 'th'},
  {label: 'Português', value: 'pt'},
];

function formatDateView(date: string) {
  return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD MMM, YYYY');
}

function formatDateData(date: Date) {
  return moment(date).format('YYYY-MM-DD');
}

function formatDateForSchedule(date: string) {
  const day = date + ' 06:30';
  return moment(day, 'YYYY_MM_DD HH:mm').add(1, 'days').toDate();
}

function formatSecondToMinutesText(time: number) {
  const divide = (time - (time % 60)) / 60;
  const modulus = time % 60;
  const minutes = `${divide}`;
  const second =
    modulus === 0 ? `00` : modulus < 10 ? `0${modulus}` : `${modulus}`;
  return `${minutes}:${second}`;
}

function formatSecondToMinutesTextHaveZero(time: number) {
  const divide = (time - (time % 60)) / 60;
  const modulus = time % 60;
  const minutes = divide < 10 ? `0${divide}` : `${divide}`;
  const second =
    modulus === 0 ? `00` : modulus < 10 ? `0${modulus}` : `${modulus}`;
  return `${minutes}:${second}`;
}

export {
  shortName,
  appName,
  isIos,
  TABBAR_HEIGHT,
  STYLE,
  ADMOB_IDS,
  APP_LANGUAGES,
  formatDateView,
  formatDateData,
  formatDateForSchedule,
  formatSecondToMinutesText,
  formatSecondToMinutesTextHaveZero,
};
