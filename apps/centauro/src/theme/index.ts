import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const getFontSize = (size: number): string => {
  if (width > 375) {
    return `${size}px`;
  }
  return `${size - 1}px`;
};

const appTheme: ThemeInterface = {
  colors: {
    primary: '#E30000',
    // shades of grey
    // __100
    white: '#fff',
    // __200
    lighterGrey: '#E5E5E5',
    // __300
    lightGrey: '#F7F7F7',
    // __400
    grey: '#D6D6D6',
    // __500
    darkGrey: '#737373',
    // __600
    darkerGrey: '#4D4D4D',
    // __700
    black: '#000',
    uiDebug: '#3367d6',

    transparent: 'transparent',
  },
  spacing: {
    none: '0',
    xs: '2px',
    sm: '7px',
    md: '20px',
    lg: '30px',
    xl: '40px',
  },
  text: {
    fontSize: {
      caption: '9px',
      label: getFontSize(12),
      info: getFontSize(14),
      subtitle: getFontSize(16),
      title: getFontSize(18),
      headline: getFontSize(24),
    },
    fontWeight: {
      bold: 'bold',
      normal: 'normal',
      light: '200',
    },
  },
  borderRadius: {
    shaped: '5px',
    default: '10px',
  },
  shadow: {box: '0 0 5px rgba(112, 112, 112, 0.15)', elevation: 5},
};

export default appTheme;
