import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconsType } from '@sbf-providers/icons';
import { useElement, ElementsType } from '@sbf-providers/elements';
import { useLocale } from '@sbf-providers/locale';

import { Actions } from '../../store/repository';
import { State } from '../../../types';
import { useTrack } from '@sbf-providers/track';
import { InputSearch } from './styles.tsx'

const { onChangeSearchField, getSearchProducts, cancelSearch } = Actions;

export const Search = () => {
  const dispatch = useDispatch();
  const {
    touchableTrack: {
      Catalog: { trackCancelSearch },
    },
    inputTrack: {
      Catalog: { trackSearch },
    },
  } = useTrack();
  const {
    containers: {
      InputSearch: { placeholder, cancel },
    },
  } = useLocale();
  const searchText = useSelector<State, string>(
    ({ catalog }) => catalog.searchText,
  );
  const hasSearcheableProducts = useSelector<State, boolean>(
    ({ catalog }) => !!catalog.visibleSearchProducts?.length,
  );

  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const Grid = useElement<GridProps>(ElementsType.GRID);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const Icon = useElement<IconProps>(ElementsType.ICON);
  const Touchable = useElement<TouchableProps>(ElementsType.TOUCHABLE);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);
  const Input = useElement<InputProps>(ElementsType.INPUT);

  return (
    <Grid justifyContent="center" paddingTop="sm" marginBottom="sm">
      <GridItem col={hasSearcheableProducts ? 10 : 12} paddingRight="xs">
        <Grid gutterHorizontal="sm">
          <GridItem shaped fullWidth backgroundColor="white" elevated>
            <Grid marginLeft="sm" marginRight="sm" fullHeight>
              <GridItem col={11} gutterHorizontal="sm">
                <InputSearch
                  idTrack={trackSearch}
                  value={searchText}
                  onChangeText={(searchText: string) => {
                    dispatch(onChangeSearchField(searchText));
                  }}
                  onSubmitEditing={() =>
                    searchText
                      ? dispatch(getSearchProducts())
                      : dispatch(cancelSearch())
                  }
                  placeholder={placeholder}
                />
              </GridItem>
              <GridItem
                col={1}
                fullHeight
                alignContent="center"
                justifyContent="center">
                <Icon icon={IconsType.ICON_SEARCH} size={22} color="grey" />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </GridItem>
      {!!hasSearcheableProducts && (
        <GridItem alignContent="center" justifyContent="flex-end" col={2}>
          <Touchable idTrack={trackCancelSearch}
            onPress={() => {
              dispatch(cancelSearch());
            }}>
            <LayoutItem gutterVertical="sm">
              <Typography fontWeight="bold" fontSize="info" color="white">
                {cancel}
              </Typography>
            </LayoutItem>
          </Touchable>
        </GridItem>
      )}
    </Grid>
  );
};
