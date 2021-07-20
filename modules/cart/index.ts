import {ScreenType} from '@sbf-providers/navigation';
import {ContainerType, Module, ModuleType} from '@sbf-providers/module';
import {useInjectReducer, useInjectSaga} from 'redux-injectors';

import reducer from './src/store/repository';
import saga from './src/store/saga';

import CartQuantityControl from './src/containers/QuantityControl';
import ButtonCart from './src/containers/ButtonCart';
import CartDetail from './src/screens/CartDetail';

import servicesMocked from './specs/servicesMocked';

export const mock = () => {
  servicesMocked();
};

export const context = () => {
  useInjectReducer({key: 'cart', reducer});
  useInjectSaga({key: 'cart', saga});
};

export const modules: Module[] = [
  {
    name: ScreenType.CART,
    Component: CartDetail,
    type: ModuleType.ROUTE,
  },
  {
    name: ContainerType.CART_BUTTON,
    Component: ButtonCart,
    type: ModuleType.CONTAINER,
  },
  {
    name: ContainerType.CART_QUANTITY_CONTROL,
    Component: CartQuantityControl,
    type: ModuleType.CONTAINER,
  },
];
