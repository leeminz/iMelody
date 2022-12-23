import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en} from './langs/en';
import {vi} from './langs/vi';
import {fr} from './langs/fr';
import {es} from './langs/es';
import {ru} from './langs/ru';
import {ja} from './langs/ja';
import {ko} from './langs/ko';
import {de} from './langs/de';
import {ar} from './langs/ar';
import {id} from './langs/id';
import {zh} from './langs/zh';
import {th} from './langs/th';
import {pt} from './langs/pt';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en,
    vi,
    fr,
    es,
    ru,
    ja,
    ko,
    de,
    ar,
    id,
    zh,
    th,
    pt,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    skipOnVariables: false,
  },
});

const trans = (string: string, params?: any): any => {
  return i18next.t(string, params);
};

export default {...i18next, trans};
