import {withProviders} from '@sbf-core/util';

import {Tester, TestHookStore} from 'cavy';
import specs from '../../../specs';
export {initMock} from './context';

export const withTestableProviders = (RootComponent: Element) => {
  return withProviders([
    Tester,
    {specs, store: new TestHookStore(), waitTime: 4000, startDelay: 1500},
  ])(RootComponent);
};
