import {styled} from '@sbf-providers/theme';
import {Color, FontSize, FontWeight, TextTransform} from '@sbf-types/general';
import {TrackeableHOC} from '../TrackeableHOC';

const getFontSize = (theme: ThemeInterface, size?: FontSize) => {
  if (size) {
    return theme.text.fontSize[size];
  }
  return theme.text.fontSize.info;
};

const getFontWeight = (theme: ThemeInterface, weight?: FontWeight) => {
  if (weight) {
    return theme.text.fontWeight[weight];
  }
  return theme.text.fontWeight.normal;
};

const getColor = (theme: ThemeInterface, color?: Color) => {
  if (color) {
    return theme.colors[color];
  }
  return theme.colors.darkGrey;
};

const getTransform = (textTransform?: TextTransform) => {
  if (textTransform) {
    return textTransform;
  }
  return 'none';
};

const Typography = styled.Text<TypographyProps>`
  max-width: 100%;
  overflow: ${({overflow = 'visible'}) => overflow};
  text-align: ${({textAlign = 'left'}) => textAlign};
  text-decoration: ${({textDecoration = 'none'}) => textDecoration};
  font-size: ${({theme, fontSize}) => getFontSize(theme, fontSize)};
  text-transform: ${({textTransform}) => getTransform(textTransform)};
  color: ${({theme, color}) => getColor(theme, color)};
  line-height: ${({theme, fontSize}) =>
    parseInt(getFontSize(theme, fontSize)) + 4}px;
  font-weight: ${({theme, fontWeight}) => getFontWeight(theme, fontWeight)};
`;

export default TrackeableHOC<TypographyProps>(Typography);
