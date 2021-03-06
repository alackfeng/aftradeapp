import I18n, { getLanguages } from 'react-native-i18n';

import { zh, en } from "./locales";

if (typeof navigator === 'object' && navigator) {
  const locale = navigator.userLanguage
    || navigator.language
    || navigator.browserLanguage
    || navigator.systemLanguage;
  if (locale) {
    I18n.locale = locale;
  }
}


// add this
getLanguages && getLanguages().then(languages => {
	console.log("=====[I18n.js]::language - ", languages);
});

I18n.fallbacks = true;
I18n.translations = {
	en,
	zh,
};

export default I18n;