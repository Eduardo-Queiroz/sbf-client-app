import React from 'react';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {useComponent, ComponentsType} from '@sbf-providers/components';
import {EmptyCart} from '../../containers/EmptyCart';
import Product from '../../components/Product';
import ResumeOrder from '../../components/ResumeOrder';
import {useSelector} from 'react-redux';
import {CartItem, State} from '../../../types';
import {useLocale} from '@sbf-providers/locale';
import {Dimensions} from 'react-native';

const CartDetail = () => {
  const {
    screens: {
      Cart: {title},
    },
  } = useLocale();
  const {items, itemsCount} = useSelector<
    State,
    {items: CartItem[]; itemsCount: number}
  >(({cart}) => ({
    items: cart.items,
    itemsCount: cart.itemsCount,
  }));
  const Footer = useComponent(ComponentsType.FOOTER);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);

  const ScrollLayoutItem = useElement<LayoutProps>(
    ElementsType.SCROLL_LAYOUT_ITEM,
  );

  return (
    <>
      {itemsCount ? (
        <>
          <ScrollLayoutItem fullHeight backgroundColor="white">
            <LayoutItem
              gutterHorizontal="md"
              gutterVertical="sm"
              marginTop="sm">
              <Typography fontWeight="bold" color="darkerGrey" fontSize="title">
                {title}
              </Typography>
            </LayoutItem>
            <LayoutItem>
              {items.map(item => (
                <LayoutItem
                  key={item.id}
                  gutterInner="sm"
                  gutterHorizontal="md">
                  <Product quantity={item.quantity} {...item.product} />
                </LayoutItem>
              ))}
            </LayoutItem>
            <LayoutItem gutterInner="sm" gutterHorizontal="md">
              <ResumeOrder items={items} itemsCount={itemsCount} />
            </LayoutItem>
            <Footer />
          </ScrollLayoutItem>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default CartDetail;
