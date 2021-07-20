import React from 'react';
import {Platform, StatusBar} from 'react-native';
import IconLogo from '../../assets/icons/logo-white.svg';

import {useElement, ElementsType} from '@sbf-providers/elements';
import {ContainerType, useContainer} from '@sbf-providers/module';

const Header = () => {
  const SafeAreaLayoutItem = useElement<LayoutProps>(
    ElementsType.SAFE_AREA_LAYOUT_ITEM,
  );
  const Grid = useElement<GridProps>(ElementsType.GRID);
  const Icon = useElement<IconProps>(ElementsType.ICON);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const SearchProduct = useContainer(ContainerType.CATALOG_SEARCH);
  const CartButton = useContainer(ContainerType.CART_BUTTON);

  return (
    <SafeAreaLayoutItem gutterInner="sm" elevated backgroundColor="primary">
      <Grid
        paddingBottom="xs"
        justifyContent="flex-end"
        style={{
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}>
        <GridItem col={4} justifyContent="center">
          <Icon width={130} icon={IconLogo} />
        </GridItem>
        <GridItem col={4} justifyContent="flex-end">
          <CartButton />
        </GridItem>
      </Grid>
      <SearchProduct />
    </SafeAreaLayoutItem>
  );
};

export default Header;
