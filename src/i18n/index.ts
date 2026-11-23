import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import lv from './lv.json';
import ru from './ru.json';

const savedLang = localStorage.getItem('nextlayer_lang') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    lv: { translation: lv },
    ru: { translation: ru },
  },
  lng: savedLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;