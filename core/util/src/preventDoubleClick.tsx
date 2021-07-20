/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from 'react';
import debounce from 'lodash.debounce'; // 4.0.8

export const withPreventDoubleClick = (WrappedComponent: any) => {
  class PreventDoubleClick extends React.PureComponent<any> {
    static displayName: string;
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    };

    onPress = debounce(this.debouncedOnPress, 300, {
      leading: true,
      trailing: false,
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName ||
    WrappedComponent.name})`;
  return PreventDoubleClick;
};
