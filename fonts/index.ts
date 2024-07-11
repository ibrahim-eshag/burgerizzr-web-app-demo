import {I18nManager} from 'react-native';

const light = I18nManager.isRTL
  ? 'Frutiger LT Arabic 45 Light'
  : 'FrutigerLTStd-Light';

const regular = I18nManager.isRTL
  ? 'Frutiger LT Arabic 55 Roman'
  : 'FrutigerLTStd-Roman';

const bold = I18nManager.isRTL
  ? 'Frutiger LT Arabic 65 Bold'
  : 'FrutigerLTStd-Bold';

const black = I18nManager.isRTL
  ? 'Frutiger LT Arabic 75 black'
  : 'FrutigerLTStd-Black';

export const fonts = {
  light,
  regular,
  bold,
  black,
};
