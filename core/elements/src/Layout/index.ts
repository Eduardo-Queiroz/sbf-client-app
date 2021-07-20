import {styled} from '@sbf-providers/theme';

const getPercentage = (col?: number) => {
  const max = 12;
  return col ? `${(col * 100) / max}%` : '0';
};

const getBorderRadius = (
  theme: ThemeInterface,
  round?: boolean,
  shaped?: boolean,
  circle?: boolean,
) => {
  if (round) {
    return theme.borderRadius.default;
  }
  if (shaped) {
    return theme.borderRadius.shaped;
  }
  if (circle) {
    return '100px';
  }
  return '0px';
};

export const LayoutItem = styled.View<LayoutProps>`
  border-style: solid;
  width: ${({fullWidth, width = 'auto'}) => (fullWidth ? '100%' : width)};
  height: ${({fullHeight, height = 'auto'}) => (fullHeight ? '100%' : height)};
  overflow: ${({overflow = 'visible'}) => overflow};
  text-align: ${({textAlign = 'left'}) => textAlign};
  border-width: ${({uiDebug, bordered = false, borderWidth = '0px'}) =>
    uiDebug ? '1px' : bordered ? '2px' : borderWidth};
  ${({theme, elevated}) => elevated && `box-shadow: ${theme.shadow.box}`}
  elevation: ${({theme, elevated}) => (elevated ? theme.shadow.elevation : 0)};
  border-color: ${({theme, uiDebug, borderColor = 'grey'}) =>
    uiDebug ? theme.colors.uiDebug : theme.colors[borderColor]};
  border-radius: ${({theme, round, circle, shaped}) =>
    getBorderRadius(theme, round, shaped, circle)};
  background-color: ${({theme, backgroundColor = 'transparent'}) =>
    theme.colors[backgroundColor]};
  margin-top: ${({theme, gutterOuter = 'none', marginTop = gutterOuter}) =>
    theme.spacing[marginTop]};
  margin-left: ${({theme, gutterOuter = 'none', marginLeft = gutterOuter}) =>
    theme.spacing[marginLeft]};
  padding-top: ${({
    theme,
    gutterInner = 'none',
    gutterVertical,
    paddingTop = gutterVertical || gutterInner,
  }) => theme.spacing[paddingTop]};
  margin-right: ${({theme, gutterOuter = 'none', marginRight = gutterOuter}) =>
    theme.spacing[marginRight]};
  padding-left: ${({
    theme,
    gutterInner = 'none',
    gutterHorizontal,
    paddingLeft = gutterHorizontal || gutterInner,
  }) => theme.spacing[paddingLeft]};
  margin-bottom: ${({
    theme,
    gutterOuter = 'none',
    marginBottom = gutterOuter,
  }) => theme.spacing[marginBottom]};
  padding-right: ${({
    theme,
    gutterInner = 'none',
    gutterHorizontal,
    paddingRight = gutterHorizontal || gutterInner,
  }) => theme.spacing[paddingRight]};
  padding-bottom: ${({
    theme,
    gutterInner = 'none',
    gutterVertical,
    paddingBottom = gutterVertical || gutterInner,
  }) => theme.spacing[paddingBottom]};
`;

export const Grid = styled(LayoutItem)<GridProps>`
  flex: ${({flex}) => flex || 'auto'};
  width: ${({width = '100%'}) => width};
  justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
  flex-direction: ${({flexDirection = 'row'}) => flexDirection};
`;

export const GridItem = styled(LayoutItem)<GridItemProps>`
  flex-wrap: ${({wrap = 'wrap'}) => wrap};
  margin-left: ${({offset = 0}) => getPercentage(offset)};
  flex-basis: ${({col, flexBasis = 'auto'}) =>
    col ? getPercentage(col) : flexBasis};
  align-items: ${({alignItems = 'flex-start'}) => alignItems};
  flex-direction: ${({flexDirection = 'row'}) => flexDirection};
  align-content: ${({alignContent = 'flex-start'}) => alignContent};
  justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
`;

export const SafeAreaLayoutItem = styled.SafeAreaView<LayoutProps>`
  border-style: solid;
  width: ${({fullWidth, width = 'auto'}) => (fullWidth ? '100%' : width)};
  height: ${({fullHeight, height = 'auto'}) => (fullHeight ? '100%' : height)};
  overflow: ${({overflow = 'visible'}) => overflow};
  text-align: ${({textAlign = 'left'}) => textAlign};
  border-width: ${({borderWidth = '0px'}) => borderWidth};
  border-color: ${({theme, borderColor = 'grey'}) => theme.colors[borderColor]};
  border-radius: ${({theme, round, shaped, circle}) =>
    getBorderRadius(theme, round, shaped, circle)};
  background-color: ${({theme, backgroundColor = 'transparent'}) =>
    theme.colors[backgroundColor]};
  margin-top: ${({theme, gutterOuter = 'none', marginTop = gutterOuter}) =>
    theme.spacing[marginTop]};
  margin-left: ${({theme, gutterOuter = 'none', marginLeft = gutterOuter}) =>
    theme.spacing[marginLeft]};
  padding-top: ${({theme, gutterInner = 'none', paddingTop = gutterInner}) =>
    theme.spacing[paddingTop]};
  margin-right: ${({theme, gutterOuter = 'none', marginRight = gutterOuter}) =>
    theme.spacing[marginRight]};
  padding-left: ${({theme, gutterInner = 'none', paddingLeft = gutterInner}) =>
    theme.spacing[paddingLeft]};
  margin-bottom: ${({
    theme,
    gutterOuter = 'none',
    marginBottom = gutterOuter,
  }) => theme.spacing[marginBottom]};
  padding-right: ${({
    theme,
    gutterInner = 'none',
    paddingRight = gutterInner,
  }) => theme.spacing[paddingRight]};
  padding-bottom: ${({
    theme,
    gutterInner = 'none',
    paddingBottom = gutterInner,
  }) => theme.spacing[paddingBottom]};
`;

export const SafeAreaGridItem = styled(SafeAreaLayoutItem)<GridItemProps>`
  flex: ${({flex = 'auto'}) => flex};
  flex-wrap: ${({wrap = 'wrap'}) => wrap};
  align-items: ${({alignItems = 'flex-start'}) => alignItems};
  flex-direction: ${({flexDirection = 'row'}) => flexDirection};
  align-content: ${({alignContent = 'flex-start'}) => alignContent};
  justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
`;

export const ScrollLayoutItem = styled.ScrollView<LayoutProps>`
  flex: ${({flex = 'auto'}) => flex};
  width: ${({fullWidth, width = 'auto'}) => (fullWidth ? '100%' : width)};
  height: ${({fullHeight, height = 'auto'}) => (fullHeight ? '100%' : height)};
  text-align: ${({textAlign = 'left'}) => textAlign};
  border-width: ${({uiDebug, bordered = false, borderWidth = '0px'}) =>
    uiDebug ? '1px' : bordered ? '2px' : borderWidth};
  ${({theme, elevated}) => elevated && `box-shadow: ${theme.shadow.box}`}
  border-color: ${({theme, uiDebug, borderColor = 'grey'}) =>
    uiDebug ? theme.colors.uiDebug : theme.colors[borderColor]};
  background-color: ${({theme, backgroundColor = 'transparent'}) =>
    theme.colors[backgroundColor]};
  margin-top: ${({theme, gutterOuter = 'none', marginTop = gutterOuter}) =>
    theme.spacing[marginTop]};
  margin-left: ${({theme, gutterOuter = 'none', marginLeft = gutterOuter}) =>
    theme.spacing[marginLeft]};
  padding-top: ${({theme, gutterInner = 'none', paddingTop = gutterInner}) =>
    theme.spacing[paddingTop]};
  margin-right: ${({theme, gutterOuter = 'none', marginRight = gutterOuter}) =>
    theme.spacing[marginRight]};
  padding-left: ${({theme, gutterInner = 'none', paddingLeft = gutterInner}) =>
    theme.spacing[paddingLeft]};
  margin-bottom: ${({
    theme,
    gutterOuter = 'none',
    marginBottom = gutterOuter,
  }) => theme.spacing[marginBottom]};
  padding-right: ${({
    theme,
    gutterInner = 'none',
    paddingRight = gutterInner,
  }) => theme.spacing[paddingRight]};
  padding-bottom: ${({
    theme,
    gutterInner = 'none',
    paddingBottom = gutterInner,
  }) => theme.spacing[paddingBottom]};
`;

export const PositionElement = styled(LayoutItem)<PositionProps>`
  top: ${({top = 'auto'}) => top};
  left: ${({left = 'auto'}) => left};
  z-index: ${({zIndex = 1}) => zIndex};
  right: ${({right = 'auto'}) => right};
  width: ${({width = 'auto'}) => width};
  bottom: ${({bottom = 'auto'}) => bottom};
  position: ${({position = 'relative'}) => position};
`;
