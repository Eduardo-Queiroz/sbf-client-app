import {mock as catalogMock} from '@sbf-modules/catalog';
import {mock as bannerMock} from '@sbf-modules/banner';
import {mock as cartMock} from '@sbf-modules/cart';

export const initMock = () => {
  catalogMock();
  bannerMock();
  cartMock();
};
