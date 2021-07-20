/* eslint-disable react/display-name */
import React from 'react';
import {
  ModuleProvider,
  useContainer,
  useRoutes,
  context,
  ModuleType,
} from './../src/index';
import {ContainerType} from './../types/index';
import {render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

const valueWrapper = {
  routes: [
    {
      name: true,
    },
  ],
  containers: {
    [ContainerType.BANNER_SINGLE]: {Component: true},
  },
};

const makeWrapper = ({children}: {children?: any}) => (
  <context.Provider value={valueWrapper}>{children}</context.Provider>
);

describe('it should test module provider', () => {
  test('it should verify provider snapshot', () => {
    const {toJSON} = render(
      <ModuleProvider
        modules={[
          {
            name: ContainerType.BANNER_SINGLE,
            type: ModuleType.ROUTE,
            Component: true,
          },
          {
            name: ContainerType.BANNER_SINGLE,
            type: ModuleType.CONTAINER,
            Component: true,
          },
        ]}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('it should verify empty provider context', () => {
    try {
      const {result} = renderHook(() => useRoutes());
      expect(result).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Sem rotas inicialiadas no contexto');
    }
  });

  test('it should verify specific value from provider context', async () => {
    try {
      const {result} = renderHook(() =>
        useContainer(ContainerType.BANNER_SINGLE),
      );
      expect(result).toBe(false);
    } catch (e) {
      expect(e.message).toBe(`Sem containers inicialiados no contexto`);
    }
  });

  test('it should verify specific value from provider route context', async () => {
    const {result} = renderHook(() => useRoutes(), {
      wrapper: makeWrapper,
    });
    expect(result.current).toMatchObject([{name: true}]);
  });

  test('it should verify specific value from provider container context', async () => {
    const {result} = renderHook(
      () => useContainer(ContainerType.BANNER_SINGLE),
      {
        wrapper: makeWrapper,
      },
    );
    expect(result.current).toBe(true);
  });
});
