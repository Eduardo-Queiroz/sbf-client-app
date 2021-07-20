declare interface LayoutProps {
  flex?: number;
  style?: {};
  uiDebug?: boolean;
  width?: string;
  height?: string;
  round?: boolean;
  circle?: boolean;
  shaped?: boolean;
  marginTop?: import('@sbf-types/general').Gutter;
  elevated?: boolean;
  marginLeft?: import('@sbf-types/general').Gutter;
  paddingTop?: import('@sbf-types/general').Gutter;
  borderColor?: import('@sbf-types/general').Color;
  paddingLeft?: import('@sbf-types/general').Gutter;
  borderWidth?: string;
  bordered?: boolean;
  gutterOuter?: import('@sbf-types/general').Gutter;
  gutterInner?: import('@sbf-types/general').Gutter;
  gutterHorizontal?: import('@sbf-types/general').Gutter;
  gutterVertical?: import('@sbf-types/general').Gutter;
  marginRight?: import('@sbf-types/general').Gutter;
  textAlign?: import('@sbf-types/general').TextAlign;
  paddingRight?: import('@sbf-types/general').Gutter;
  marginBottom?: import('@sbf-types/general').Gutter;
  paddingBottom?: import('@sbf-types/general').Gutter;
  backgroundColor?: import('@sbf-types/general').Color;
  overflow?: 'visible' | 'hidden';
  fullWidth?: boolean;
  fullHeight?: boolean;
  alignItems?: import('@sbf-types/general').FlexAlign;
  alignContent?: import('@sbf-types/general').FlexAlign;
  justifyContent?: import('@sbf-types/general').FlexJustify;
  flexDirection?: import('@sbf-types/general').FlexDirections;
}

declare interface GridProps extends LayoutProps {
  wrap?: import('@sbf-types/general').FlexWrap;
  flex?: string | number;
}

declare interface GridItemProps extends LayoutProps {
  wrap?: import('@sbf-types/general').FlexWrap;
  flex?: string | number;
  col?: number;
  offset?: number;
  flexBasis?: string;
}

declare interface PositionProps extends LayoutProps {
  top?: string;
  left?: string;
  right?: string;
  width?: string;
  bottom?: string;
  zIndex?: number;
  position?: import('@sbf-types/general').Position;
}
