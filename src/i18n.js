import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";


import enUsLang from "./assets/i18n/en_US.json"
import esESLang from "./assets/i18n/es_ES.json"
import deDeLang from "./assets/i18n/de_DE.json"

i18n
    // pass the i18n instance to react-i18next.
    .use(detector)
    .use(backend)
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
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
        preload: ["en", "es", "de"],
        lng: 'en',
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        }
    });


i18n.languages = ["en", "es", "de"];


export default i18n;


export const changeLanguage = (langId) => {
    i18n.changeLanguage(langId)
}

export const getCurrentLanguage = () => {
    return localStorage.getItem("i18nextLng");
}