import React from 'react';

import {useTheme} from '@sbf-providers/theme';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {navigate, ScreenType} from '@sbf-providers/navigation';
import {IconsType} from '@sbf-providers/icons';
import {useSelector} from 'react-redux';
import {State} from '../../../types';
import {useTrack} from '@sbf-providers/track';

const ButtonCart = () => {
  const {
    textTrack: {
      Cart: {trackItemCount},
    },
    touchableTrack: {
      Cart: {trackGoToDetails},
    },
  } = useTrack();
  const itemsCount = useSelector<State, number>(({cart}) => cart.itemsCount);
  const theme = useTheme();
  const LayoutItem = useElement<PositionProps>(ElementsType.LAYOUT_ITEM);
  const PositionElement = useElement<PositionProps>(
    ElementsType.POSITION_ELEMENT,
  );
  const Icon = useElement<IconProps>(ElementsType.ICON);
  const Touchable = useElement<TouchableProps>(ElementsType.TOUCHABLE);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);

  return (
    <Touchable
      idTrack={trackGoToDetails}
      onPress={() => {
        navigate(ScreenType.CART);
      }}>
      <LayoutItem backgroundColor={'primary'}>
        {!!itemsCount && (
          <PositionElement
            position="absolute"
            top="-8px"
            right="-2px"
            zIndex={2}
            style={{
              padding: 3,
              borderColor: theme.colors.primary,
              borderWidth: 2,
            }}
            width={'18px'}
            height={'18px'}
            justifyContent="center"
            circle
            backgroundColor={'white'}>
            <Typography
              idTrack={trackItemCount}
              fontSize="label"
              textAlign="center"
              color="black"
              fontWeight="bold">
              {itemsCount}
            </Typography>
          </PositionElement>
        )}
        <Icon color={'white'} size={34} icon={IconsType.ICON_CART} />
      </LayoutItem>
    </Touchable>
  );
};

export default ButtonCart;
