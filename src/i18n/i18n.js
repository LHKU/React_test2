import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ja from './ja.json';


i18n.use(initReactI18next).init({
  resources: {
    en : en,
    ja : ja
  },
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;