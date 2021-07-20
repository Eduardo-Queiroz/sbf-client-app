/* eslint-disable react/display-name */
import React from 'react';
import {ElementProvider, useElement, context} from './../src/index';
import {ElementsType} from './../types/elements';
import {render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

const makeWrapper = ({children}: {children?: any}) => (
  <context.Provider value={{elements: {[ElementsType.FLAT_LIST]: true}}}>
    {children}
  </context.Provider>
);

describe('it should test elements provider', () => {
  test('it should verify provider snapshot', () => {
    const {toJSON} = render(
      <ElementProvider elements={{[ElementsType.FLAT_LIST]: true}} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('it should verify empty provider context', () => {
    try {
      const {result} = renderHook(() => useElement(ElementsType.FLAT_LIST));
      expect(result).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Providers de elementos não inicializados');
    }
  });

  test('it should verify specific value from provider context', async () => {
    const {result} = renderHook(() => useElement(ElementsType.FLAT_LIST), {
      wrapper: makeWrapper,
    });
    expect(result.current).toBe(true);
  });
});
