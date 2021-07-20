interface TypographyPropsInterface {
  color?: import('@sbf-types/general').Color;
  fontSize?: import('@sbf-types/general').FontSize;
  overflow?: import('@sbf-types/general').Overflow;
  textAlign?: import('@sbf-types/general').TextAlign;
  fontWeight?: import('@sbf-types/general').FontWeight;
  textTransform?: import('@sbf-types/general').TextTransform;
  textDecoration?: import('@sbf-types/general').TextDecoration;
}

declare type TypographyProps = TypographyPropsInterface &
  TrackeablePropsInterface;
