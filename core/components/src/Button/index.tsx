import React from 'react';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {withPreventDoubleClick} from '@sbf-core/util';

const Button: React.FC<ButtonProps> = ({onPress, text, disabled, idTrack}) => {
  const Touchable = useElement<TouchableProps>(ElementsType.TOUCHABLE);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);

  const handleOnPress = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <Touchable idTrack={idTrack} onPress={handleOnPress}>
      <LayoutItem
        width="220px"
        shaped
        alignItems="center"
        backgroundColor="primary"
        gutterVertical="md"
        gutterHorizontal="md">
        <Typography color="white" fontWeight="bold" fontSize="title">
          {text}
        </Typography>
      </LayoutItem>
    </Touchable>
  );
};

export default withPreventDoubleClick(Button);
