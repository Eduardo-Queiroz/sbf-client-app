import React from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {IconsType} from '@sbf-providers/icons';
import {Product as InterfaceProduct} from '@sbf-types/general';
import {useElement, ElementsType} from '@sbf-providers/elements';

import QuantityControl from '../../containers/QuantityControl';
import {Actions} from '../../store/repository';
import {CartItem} from '../../../types';
import {useLocale} from '@sbf-providers/locale';
import {useTrack} from '@sbf-providers/track';
import {formatCurrency} from '@sbf-core/util';

type ProductProps = CartItem & InterfaceProduct;

const Product: React.FC<ProductProps> = ({
  id,
  quantity,
  name,
  image,
  price,
  oldPrice,
}) => {
  const dispatch = useDispatch();

  const {
    touchableTrack: {
      Cart: {trackDelete},
    },
  } = useTrack();
  const {
    components: {
      product: {delete: deleteText},
    },
  } = useLocale();

  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);
  const Touchable = useElement<TouchableProps>(ElementsType.TOUCHABLE);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const Grid = useElement<GridProps>(ElementsType.GRID);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const Icon = useElement<IconProps>(ElementsType.ICON);

  const removeProductFromCart = () => {
    dispatch(Actions.quantityRemoveProduct({id}));
  };

  return (
    <LayoutItem shaped backgroundColor="white" bordered>
      <Grid gutterHorizontal="sm" gutterVertical="sm">
        <GridItem
          col={4}
          gutterInner="sm"
          paddingRight="lg"
          fullWidth
          alignContent="center">
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
            source={{
              uri: image,
            }}
          />
        </GridItem>
        <GridItem col={7}>
          <Grid flexDirection="column">
            <GridItem paddingBottom="sm">
              <Typography color="black" fontSize="subtitle">
                {name}
              </Typography>
            </GridItem>

            <GridItem paddingBottom="sm" alignItems="center">
              <QuantityControl id={id} quantity={quantity} />
              <Touchable
                idTrack={trackDelete(id)}
                onPress={removeProductFromCart}>
                <LayoutItem gutterHorizontal="sm" flexDirection="row">
                  <LayoutItem marginRight="sm">
                    <Icon icon={IconsType.ICON_CLOSE} size={20} />
                  </LayoutItem>
                  <Typography color="darkerGrey" fontSize="info">
                    {deleteText}
                  </Typography>
                </LayoutItem>
              </Touchable>
            </GridItem>

            <GridItem paddingBottom="sm">
              <Typography fontWeight="bold" color="black" fontSize="subtitle">
                {formatCurrency(price)}
              </Typography>
            </GridItem>

            {oldPrice && (
              <GridItem paddingBottom="sm">
                <Typography
                  textDecoration="line-through"
                  color="darkGrey"
                  fontSize="label">
                  {formatCurrency(oldPrice)}
                </Typography>
              </GridItem>
            )}
          </Grid>
        </GridItem>
      </Grid>
    </LayoutItem>
  );
};

export default Product;
