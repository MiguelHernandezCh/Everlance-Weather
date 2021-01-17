import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import enUsLang from "./assets/i18n/en_US.json"
import esESLang from "./assets/i18n/es_ES.json"
import deDeLang from "./assets/i18n/de_DE.json"
import {initReactI18next} from "react-i18next";

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .use(LngDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        debug: false,
        resources: {
            en: {
                translation: enUsLang
            },
            es: {
                translation: esESLang
            },
            de: {
                translation: deDeLang
            }
        },
        interpolation: {
            escapeValue: false,
        }
    });



export default i18n;