import React from 'react';
import {useCavy, wrap} from 'cavy';

const isNotReactClass = (Component: any) => {
  return !(Component.prototype && Component.prototype.isReactComponent);
};

export function TrackeableHOC<TrackProps>(Component: any) {
  const forwardRef = (props: any, ref: any) => {
    if (process.env.NODE_ENV?.trim() === 'test') {
      const generateTestHook = useCavy();
      const ComponentTestable: any =
        (typeof Component === 'function' || typeof Component == 'object') &&
        isNotReactClass(Component)
          ? wrap(Component)
          : Component;

      return (
        <ComponentTestable
          {...props}
          ref={generateTestHook(`${props.idTrack}`, ref)}
        />
      );
    } else {
      return (
        <Component
          testID={props.idTrack}
          {...props}
          ref={ref}
        />
      );
    }
  };
  forwardRef.displayName = Component.displayName || Component.name;
  return React.forwardRef<any, TrackProps>(forwardRef);
}
