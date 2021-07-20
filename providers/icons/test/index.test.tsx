/* eslint-disable react/display-name */
import React from 'react';
import {IconProvider, useIcon, context} from './../src/index';
import {IconsType} from './../types/index';
import {render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

const valueWrapper = {
  [IconsType.ICON_CART]: true,
};

const makeWrapper = ({children}: {children?: any}) => (
  <context.Provider
    value={{
      icons: valueWrapper,
    }}>
    {children}
  </context.Provider>
);

describe('it should test icons provider', () => {
  test('it should verify provider snapshot', () => {
    const {toJSON} = render(<IconProvider icons={valueWrapper} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('it should verify empty provider context', () => {
    try {
      const {result} = renderHook(() => useIcon(IconsType.ICON_CART));
      expect(result).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Provider de icones não inicializados');
    }
  });

  test('it should verify specific value from provider context', async () => {
    const {result} = renderHook(() => useIcon(IconsType.ICON_CART), {
      wrapper: makeWrapper,
    });
    expect(result.current).toBe(true);
  });
});
