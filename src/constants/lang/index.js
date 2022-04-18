import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizedStrings from 'react-native-localization';

import en from './en';
import fr from './fr';
import hn from './hn';



let langstring = new LocalizedStrings({
  en: en,
  fr: fr,
  hn:hn
});
export const changeLaguage = async (languageKey) => {
    await AsyncStorage.setItem('language', languageKey)
    langstring.setLanguage(languageKey);
};
export default langstring;