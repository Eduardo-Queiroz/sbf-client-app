/* eslint-disable react/display-name */
import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

import {useTheme} from '@sbf-providers/theme';
import {IOSTouchable, AndroidTouchable, DefaultTouchable} from './styles';
import {TrackeableHOC} from '../TrackeableHOC';

const Touchable: React.FC<TouchableProps> = React.forwardRef(
  ({withoutFeedback = false, native = false, ...props}, ref: any) => {
    const theme = useTheme();

    if (withoutFeedback) {
      return (
        <TouchableWithoutFeedback ref={ref} {...props}>
          {props.children}
        </TouchableWithoutFeedback>
      );
    }

    if (native && Platform.OS === 'ios') {
      return (
        <IOSTouchable ref={ref} {...props}>
          {props.children}
        </IOSTouchable>
      );
    } else if (native) {
      return (
        <AndroidTouchable
          ref={ref}
          {...props}
          background={TouchableNativeFeedback.Ripple(theme.colors.primary)}>
          {props.children}
        </AndroidTouchable>
      );
    } else {
      return (
        <DefaultTouchable ref={ref} {...props}>
          {props.children}
        </DefaultTouchable>
      );
    }
  },
);
export default TrackeableHOC<CustomTouchableProps>(Touchable);
