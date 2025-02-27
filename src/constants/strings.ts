import LocalizedStrings from 'react-native-localization';
import data from './data.json';

export const LANGUAGES = ['en'];

const Strings = new LocalizedStrings({
  data,
});

export default Strings;
