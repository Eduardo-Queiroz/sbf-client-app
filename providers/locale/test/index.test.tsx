/* eslint-disable react/display-name */
import React from 'react';
import {LocaleProvider, useLocale, context} from './../src/index';
import {render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

const valueWrapper = {
  screens: true,
};

const makeWrapper = ({children}: {children?: any}) => (
  <context.Provider
    value={{
      locale: valueWrapper,
    }}>
    {children}
  </context.Provider>
);

describe('it should test locale provider', () => {
  test('it should verify provider snapshot', () => {
    const {toJSON} = render(<LocaleProvider locale={valueWrapper} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('it should verify empty provider context', () => {
    try {
      const {result} = renderHook(() => useLocale());
      expect(result).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Provider de locale não inicializados');
    }
  });

  test('it should verify specific value from provider context', async () => {
    const {result} = renderHook(() => useLocale(), {
      wrapper: makeWrapper,
    });
    expect(result.current).toMatchObject({screens: true});
  });
});
