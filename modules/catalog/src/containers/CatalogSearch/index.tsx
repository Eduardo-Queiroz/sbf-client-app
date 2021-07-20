import React from 'react';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {useComponent, ComponentsType} from '@sbf-providers/components';
import Product from '../../components/Product';
import {Actions} from '../../store/repository';
import {useDispatch, useSelector} from 'react-redux';
import {State, SORT_OPTIONS} from '../../../types';
import {Product as ProductInterface} from '@sbf-types/general';
import {useLocale} from '@sbf-providers/locale';
import {useTrack} from '@sbf-providers/track';

const ORDER_OPTIONS = [
  {label: 'Relevância', value: SORT_OPTIONS.RELEVANCE},
  {label: 'Menor preço', value: SORT_OPTIONS.LOWEST_PRICE},
  {label: 'Maior preço', value: SORT_OPTIONS.HIGHEST_PRICE},
  {label: 'Maior desconto', value: SORT_OPTIONS.HIGHEST_DISCOUNT},
];

export const CatalogSearch = () => {
  const dispatch = useDispatch();
  const {
    touchableTrack: {
      Catalog: {trackSeeMore, trackSort},
    },
  } = useTrack();
  const {
    containers: {
      CatalogSearch: {sortBy, seeMore},
    },
  } = useLocale();
  const {searchProducts, searchHasMorePage, searchSort} = useSelector<
    State,
    {
      searchProducts: ProductInterface[];
      searchHasMorePage: boolean;
      searchSort: string;
    }
  >(({catalog}) => ({
    searchSort: catalog.searchSort,
    searchProducts: catalog.visibleSearchProducts,
    searchHasMorePage: catalog.searchHasMorePage,
  }));

  const Footer = useComponent(ComponentsType.FOOTER);
  const Button = useComponent<ButtonProps>(ComponentsType.BUTTON);
  const Grid = useElement<GridProps>(ElementsType.GRID);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const FlatList = useElement<FlatListProps>(ElementsType.FLAT_LIST);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);
  const Picker = useElement<PickerProps>(ElementsType.PICKER);

  return (
    <LayoutItem backgroundColor="white">
      <FlatList
        ListHeaderComponent={() => (
          <Grid gutterOuter="sm" gutterHorizontal="md">
            <GridItem alignContent="center" col={6}>
              <Typography color="black" fontSize="info">
                {sortBy}
              </Typography>
            </GridItem>
            <GridItem gutterInner="sm" paddingRight="none" col={6}>
              <Picker
                idTrack={trackSort}
                value={searchSort}
                onValueChange={(value: SORT_OPTIONS) =>
                  dispatch(Actions.onChangeSortSearchField(value))
                }
                items={ORDER_OPTIONS}
              />
            </GridItem>
          </Grid>
        )}
        ListFooterComponent={() =>
          searchHasMorePage ? (
            <>
              <Grid
                justifyContent="center"
                gutterOuter="sm"
                gutterHorizontal="md">
                <GridItem>
                  <Button
                    idTrack={trackSeeMore}
                    text={seeMore}
                    onPress={() => {
                      dispatch(Actions.getSearchProductsNextPage());
                    }}
                  />
                </GridItem>
              </Grid>
              <Footer />
            </>
          ) : (
            <Footer />
          )
        }
        data={searchProducts}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'center'}}
        keyExtractor={item => item.id}
        renderItem={({item}: any) => (
          <LayoutItem gutterVertical="sm">
            <Product {...item} />
          </LayoutItem>
        )}
      />
    </LayoutItem>
  );
};
