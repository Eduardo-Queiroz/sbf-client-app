import React from 'react';
import * as styledComponents from 'styled-components/native';

const {
  default: styled,
  css,
  ThemeProvider,
  ThemeContext,
} = (styledComponents as unknown) as styledComponents.ReactNativeThemedStyledComponentsModule<
  ThemeInterface
>;

const useTheme = () => {
  return React.useContext<ThemeInterface>(ThemeContext);
};

export {styled, css, ThemeProvider, useTheme};
