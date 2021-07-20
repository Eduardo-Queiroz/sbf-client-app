import React from 'react';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {IconsType} from '@sbf-providers/icons';
import {useDispatch} from 'react-redux';

import {Actions} from '../../store/repository';
import {useTrack} from '@sbf-providers/track';

interface CartQuantityControlProps {
  id: string;
  quantity: number;
}

const CartQuantityControl: React.FC<CartQuantityControlProps> = ({
  id,
  quantity,
}) => {
  const dispatch = useDispatch();
  const {
    touchableTrack: {
      Cart: {trackQuantityMinus, trackQuantityPlus},
    },
    textTrack: {
      Cart: {trackQuantity},
    },
  } = useTrack();
  const Touchable = useElement<TouchableProps>(ElementsType.TOUCHABLE);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);
  const Icon = useElement<IconProps>(ElementsType.ICON);
  const increment = () => {
    dispatch(Actions.changeQuantityProduct({id, quantity: 1}));
  };
  const decrement = () => {
    if (quantity >= 2)
      dispatch(Actions.changeQuantityProduct({id, quantity: -1}));
    else dispatch(Actions.quantityRemoveProduct({id}));
  };

  return (
    <LayoutItem flexDirection="row" bordered shaped backgroundColor="lightGrey">
      <Touchable idTrack={trackQuantityMinus(id)} onPress={decrement}>
        <LayoutItem
          width="25px"
          height="25px"
          justifyContent="center"
          alignItems="center">
          <Typography>
            <Icon icon={IconsType.ICON_MINUS} size={7} />
          </Typography>
        </LayoutItem>
      </Touchable>
      <LayoutItem
        width="30px"
        height="25px"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        style={{
          borderLeftWidth: 2,
          borderRightWidth: 2,
        }}>
        <Typography idTrack={trackQuantity}>{quantity}</Typography>
      </LayoutItem>

      <Touchable idTrack={trackQuantityPlus(id)} onPress={increment}>
        <LayoutItem
          width="25px"
          height="25px"
          justifyContent="center"
          alignItems="center">
          <Icon icon={IconsType.ICON_PLUS} size={10} />
        </LayoutItem>
      </Touchable>
    </LayoutItem>
  );
};

export default CartQuantityControl;
