import LocalizedStrings from 'react-native-localization';
import en from './en';

let strings = new LocalizedStrings({
  en: en,
});
export const changeLaguage = languageKey => {
  strings.setLanguage(languageKey);
};
export default strings;
