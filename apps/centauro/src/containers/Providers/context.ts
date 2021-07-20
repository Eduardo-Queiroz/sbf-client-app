import {initNavigationAdapter} from '@sbf-providers/navigation';
import * as navigation from '@sbf-core/navigation-v5';
import * as navigationDependency from '@react-navigation/native';

import {initAxios} from '@sbf-core/api';
import {context as catalogContext} from '@sbf-modules/catalog';
import {context as bannerContext} from '@sbf-modules/banner';
import {context as cartContext} from '@sbf-modules/cart';

export const initContext = () => {
  initNavigationAdapter(navigation, navigationDependency);
  initAxios();
  catalogContext();
  bannerContext();
  cartContext();
};
