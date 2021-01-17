import {getCurrentLanguage} from "../../i18n";

export const getLanguageItems = () => {
    const lang = getCurrentLanguage();
    return ([
        {label: "English", isSelected: lang === "en", value: "en", img: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png"},
        {label: "Español", isSelected: lang === "es", value: "es", img: "https://cdn.countryflags.com/thumbs/mexico/flag-round-250.png"},
        {label: "Deutsche", isSelected: lang === "de", value: "de", img: "https://cdn.countryflags.com/thumbs/germany/flag-round-250.png"},
    ]);
}
