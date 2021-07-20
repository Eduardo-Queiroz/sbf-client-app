/* eslint-disable react/display-name */
import React from 'react';
import {ComponentProvider, useComponent, context} from './../src/index';
import {ComponentsType} from './../types/components';
import {render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

const valueWrapper = {
  [ComponentsType.LOADING]: true,
  [ComponentsType.BUTTON]: true,
};

const makeWrapper = ({children}: {children?: any}) => (
  <context.Provider
    value={{
      components: valueWrapper,
    }}>
    {children}
  </context.Provider>
);

describe('it should test components provider', () => {
  test('it should verify provider snapshot', () => {
    const {toJSON} = render(<ComponentProvider components={valueWrapper} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('it should verify empty provider context', () => {
    try {
      const {result} = renderHook(() => useComponent(ComponentsType.BUTTON));
      expect(result).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Providers de componentes não inicializados');
    }
  });

  test('it should verify specific value from provider context', async () => {
    const {result} = renderHook(() => useComponent(ComponentsType.BUTTON), {
      wrapper: makeWrapper,
    });
    expect(result.current).toBe(true);
  });
});
