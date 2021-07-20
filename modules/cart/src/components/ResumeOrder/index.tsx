import React, {useMemo} from 'react';
import {Actions} from '../../store/repository';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {useDispatch} from 'react-redux';
import {ComponentsType, useComponent} from '@sbf-providers/components';
import {CartItem} from '../../../types';
import {useLocale} from '@sbf-providers/locale';
import {useTrack} from '@sbf-providers/track';
import {formatCurrency} from '@sbf-core/util';

interface ResumeOrdersProps {
  items: CartItem[];
  itemsCount: number;
}
const ResumeOrder: React.FC<ResumeOrdersProps> = ({items, itemsCount}) => {
  const dispatch = useDispatch();
  const {
    textTrack: {
      Cart: {trackSubtotal, trackDiscont, trackTotal},
    },
    touchableTrack: {
      Cart: {trackCompleteOrder},
    },
  } = useTrack();
  const {
    components: {
      resumeOrder: {title, subtotal, discont, total, buttonFinish},
    },
  } = useLocale();

  const {price, oldPrice} = useMemo(
    () => ({
      price: items.reduce(
        (accumulator: number, currentItem: CartItem) =>
          accumulator + currentItem.product.price * currentItem.quantity,
        0,
      ),
      oldPrice: items.reduce(
        (accumulator: number, currentItem: CartItem) =>
          accumulator + currentItem.product.oldPrice * currentItem.quantity,
        0,
      ),
    }),
    [itemsCount],
  );

  const subtotalvalue = useMemo(() => formatCurrency(oldPrice), [oldPrice]);

  const discountValue = useMemo(() => formatCurrency(oldPrice - price), [
    oldPrice,
    price,
  ]);

  const totalValue = useMemo(() => formatCurrency(price), [price]);

  const Button = useComponent<ButtonProps>(ComponentsType.BUTTON);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const Grid = useElement<GridProps>(ElementsType.GRID);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);

  return (
    <Grid
      flexDirection="column"
      gutterInner="md"
      shaped
      backgroundColor="white"
      bordered>
      <GridItem justifyContent="center" paddingBottom="sm">
        <Typography fontWeight="bold" color="black" fontSize="title">
          {title}
        </Typography>
      </GridItem>
      <GridItem justifyContent="center" gutterVertical="md">
        <LayoutItem backgroundColor="black" width="20px" height="3px" />
      </GridItem>
      <GridItem gutterVertical="sm">
        <Grid>
          <GridItem col={6}>
            <Typography color="black" fontSize="subtitle">
              {subtotal}
            </Typography>
          </GridItem>
          <GridItem justifyContent="flex-end" col={6}>
            <Typography
              idTrack={trackSubtotal}
              fontWeight="bold"
              color="black"
              fontSize="subtitle">
              {subtotalvalue}
            </Typography>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem gutterVertical="md">
        <Grid>
          <GridItem col={6}>
            <Typography color="black" fontSize="subtitle">
              {discont}
            </Typography>
          </GridItem>
          <GridItem justifyContent="flex-end" col={6}>
            <Typography
              idTrack={trackDiscont}
              fontWeight="bold"
              color="black"
              fontSize="subtitle">
              {discountValue}
            </Typography>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem gutterVertical="sm">
        <Grid gutterInner="md" gutterHorizontal="sm" shaped bordered>
          <GridItem col={6}>
            <Typography fontWeight="bold" color="black" fontSize="title">
              {total}
            </Typography>
          </GridItem>
          <GridItem justifyContent="flex-end" col={6}>
            <Typography
              idTrack={trackTotal}
              fontWeight="bold"
              color="black"
              fontSize="title">
              {totalValue}
            </Typography>
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem paddingTop="md" justifyContent="center">
        <Button
          idTrack={trackCompleteOrder}
          text={buttonFinish}
          onPress={() => {
            dispatch(Actions.completeOrder());
          }}
        />
      </GridItem>
    </Grid>
  );
};

export default ResumeOrder;
