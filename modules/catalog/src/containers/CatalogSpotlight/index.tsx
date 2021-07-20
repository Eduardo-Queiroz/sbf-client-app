import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {useComponent, ComponentsType} from '@sbf-providers/components';
import Product from '../../components/Product';
import {Actions} from '../../store/repository';
import {Product as ProductInterface} from '@sbf-types/general';
import {State, PENDING_TYPE} from '../../../types';
import {useLocale} from '@sbf-providers/locale';

export const CatalogSpotlight = () => {
  const dispatch = useDispatch();
  const {
    containers: {
      CatalogSpotlight: {title},
    },
  } = useLocale();
  const spotlightProducts = useSelector<State, ProductInterface[]>(
    ({catalog}) => catalog.spotlightProducts,
  );
  const pending = useSelector<State, boolean>(
    ({catalog}) => !!catalog.pending[PENDING_TYPE.SPOTLIGHT],
  );

  useEffect(() => {
    dispatch(Actions.getSpotlightProducts());
  }, []);

  const Loading = useComponent(ComponentsType.LOADING);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const FlatList = useElement<FlatListProps>(ElementsType.FLAT_LIST);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);

  if (pending) {
    return <Loading />;
  }

  return (
    <LayoutItem alignItems="center" backgroundColor="white">
      <LayoutItem alignItems="center" marginBottom="sm">
        <Typography color="black" fontSize="headline" fontWeight="bold">
          {title}
        </Typography>
      </LayoutItem>
      <FlatList
        data={spotlightProducts}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
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
