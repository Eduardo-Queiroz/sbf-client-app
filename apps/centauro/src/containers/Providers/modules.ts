import {modules as catalogModules} from '@sbf-modules/catalog';
import {modules as bannerModules} from '@sbf-modules/banner';
import {modules as cartModules} from '@sbf-modules/cart';
import {modules as modalModules} from '@sbf-core/modal';

export default [
  ...catalogModules,
  ...bannerModules,
  ...cartModules,
  ...modalModules,
];
