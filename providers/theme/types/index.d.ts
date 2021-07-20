declare interface ThemeInterface {
  colors: {
    primary: string;
    white: string;
    black: string;
    lighterGrey: string;
    lightGrey: string;
    grey: string;
    darkGrey: string;
    darkerGrey: string;
    transparent: string;
    uiDebug: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    none: string;
  };
  text: {
    fontSize: {
      info: string;
      label: string;
      title: string;
      caption: string;
      subtitle: string;
      headline: string;
    };
    fontWeight: {
      bold: string;
      normal: string;
      light: string;
    };
  };
  borderRadius: {
    shaped: string;
    default: string;
  };
  shadow: {
    box: string;
    elevation: number;
  };
}
