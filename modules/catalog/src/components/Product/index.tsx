import React from 'react';

import {useElement, ElementsType} from '@sbf-providers/elements';
import {Dimensions, Image} from 'react-native';
import {ActionProcolType} from '@sbf-providers/redux';
import {useDispatch} from 'react-redux';
import {Product as ProductInterface} from '@sbf-types/general';
import {useLocale} from '@sbf-providers/locale';
import {useTrack} from '@sbf-providers/track';
import {formatCurrency} from '@sbf-core/util';

const PRODUCT_WIDTH = `${Dimensions.get('window').width / 2.1}px`;

const Product: React.FC<ProductInterface> = ({
  name,
  image,
  price,
  oldPrice,
  rate,
  reviews,
  freeShipping,
  discount,
  id,
  colors,
}) => {
  const dispatch = useDispatch();

  const {
    touchableTrack: {
      Catalog: {trackAddProduct},
    },
  } = useTrack();
  const {
    components: {
      product: {freeShipping: freeShippingText, modelsType},
    },
  } = useLocale();
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);
  const PositionElement = useElement<PositionProps>(
    ElementsType.POSITION_ELEMENT,
  );
  const Touchable = useElement<TouchableProps>(ElementsType.TOUCHABLE);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const Grid = useElement<GridProps>(ElementsType.GRID);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const Rating = useElement<RatingProps>(ElementsType.RATING);

  const addCartItem = () => {
    const cartItem: ActionProcolType = {
      type: ActionProcolType.ADD_CART_ITEM,
      payload: {
        product: {
          name,
          image,
          price,
          oldPrice,
          discount,
          id,
        },
      },
    };
    dispatch(cartItem);
  };

  return (
    <LayoutItem flex={1} gutterHorizontal="sm" width={PRODUCT_WIDTH}>
      <Touchable idTrack={trackAddProduct(id)} flex={1} onPress={addCartItem}>
        <GridItem flex={1} shaped backgroundColor="white" bordered>
          <Grid
            flexDirection="column"
            gutterHorizontal="sm"
            gutterVertical="sm">
            <GridItem
              flex={1}
              marginBottom="sm"
              fullWidth
              alignContent="center">
              {discount && (
                <PositionElement top="0" right="0" position="absolute">
                  <LayoutItem
                    shaped
                    borderColor="primary"
                    bordered
                    gutterInner="xs"
                    gutterHorizontal="sm">
                    <Typography
                      fontWeight="bold"
                      color="primary"
                      fontSize="label">
                      {discount}%
                    </Typography>
                  </LayoutItem>
                </PositionElement>
              )}
              <Image
                resizeMode="contain"
                style={{
                  width: 160,
                  height: 150,
                }}
                source={{
                  uri: image,
                }}
              />
            </GridItem>
            <GridItem fullWidth>
              <Grid flexDirection="column">
                {freeShipping && (
                  <GridItem
                    marginBottom="sm"
                    shaped
                    justifyContent="center"
                    fullWidth
                    gutterInner="xs"
                    backgroundColor="darkerGrey">
                    <Typography color="white" fontSize="info">
                      {freeShippingText}
                    </Typography>
                  </GridItem>
                )}
                <GridItem paddingBottom="xs" marginBottom="sm">
                  <Typography fontWeight="bold" color="black" fontSize="info">
                    {name}
                  </Typography>
                </GridItem>

                <GridItem paddingBottom="sm" justifyContent="space-between">
                  <Typography
                    fontWeight="bold"
                    color="black"
                    fontSize="subtitle">
                    {formatCurrency(price)}
                  </Typography>

                  {oldPrice && (
                    <Typography
                      textDecoration="line-through"
                      color="darkGrey"
                      fontSize="label">
                      {formatCurrency(oldPrice)}
                    </Typography>
                  )}
                </GridItem>

                <GridItem paddingBottom="md">
                  <Grid>
                    <GridItem col={8} paddingRight="xs">
                      <Rating rating={rate} />
                    </GridItem>
                    <GridItem col={3} paddingLeft="xs">
                      <Typography
                        fontWeight="bold"
                        color="darkGrey"
                        fontSize="label">
                        ({reviews})
                      </Typography>
                    </GridItem>
                  </Grid>
                </GridItem>

                <GridItem paddingBottom="sm">
                  <LayoutItem
                    shaped
                    backgroundColor="lightGrey"
                    gutterInner="xs"
                    gutterHorizontal="sm">
                    <Typography
                      fontWeight="bold"
                      color="darkerGrey"
                      fontSize="info">
                      {colors} {modelsType}
                    </Typography>
                  </LayoutItem>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
      </Touchable>
    </LayoutItem>
  );
};

export default Product;
