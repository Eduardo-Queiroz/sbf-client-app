import React from 'react';
import {useTheme} from '@sbf-providers/theme';
import {useIcon} from '@sbf-providers/icons';

import {ImageIcon} from './styles';

const Icon: React.FC<IconProps> = ({height, width, size, color, ...props}) => {
  const theme = useTheme();

  if (typeof props.icon === 'string') {
    const CustomIcon = useIcon(props.icon);

    if (typeof CustomIcon == 'number') {
      return (
        <ImageIcon
          size={size}
          width={width}
          height={height}
          source={CustomIcon}
        />
      );
    } else {
      return (
        <CustomIcon
          width={width || size || 25}
          height={height || size || 25}
          fill={color ? theme.colors[color] : theme.colors.darkGrey}
        />
      );
    }
  } else if (typeof props.icon === 'function') {
    return (
      <props.icon
        width={width || size || 25}
        height={height || size || 25}
        fill={color ? theme.colors[color] : theme.colors.darkGrey}
      />
    );
  }
};

export default Icon;
