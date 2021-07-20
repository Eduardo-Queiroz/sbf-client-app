/* eslint-disable react/display-name */
import React from 'react';
import {ConfigProvider, useConfig, context} from './../src/index';
import {render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

const makeWrapper = ({children}: {children?: any}) => (
  <context.Provider value={{config: {BASE_URL: 'https:localhost:3000'}}}>
    {children}
  </context.Provider>
);

describe('it should test config provider', () => {
  test('it should verify provider snapshot', () => {
    const {toJSON} = render(
      <ConfigProvider config={{BASE_URL: 'https://localhost:3000'}} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('it should verify empty provider context', () => {
    try {
      const {result} = renderHook(() => useConfig());
      expect(result).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Provider de configuração não inicializado');
    }
  });

  test('it should verify specific value from provider context', async () => {
    const {result} = renderHook(() => useConfig(), {
      wrapper: makeWrapper,
    });
    expect(result.current).toMatchObject({BASE_URL: 'https:localhost:3000'});
  });
});
