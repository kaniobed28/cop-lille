import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n
  .use(LanguageDetector) // ← ajoute cette ligne
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    fallbackLng: 'en', // si la langue détectée n'est pas disponible
    detection: {
      // options (facultatif)
      order: ['navigator', 'htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
