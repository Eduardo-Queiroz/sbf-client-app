import {mockApi} from '@sbf-core/api';
import {Product} from '@sbf-types/general';
import {getPromotion, getSearch} from './data';

const waysToSort = {
  lowestPrice: (a: Product, b: Product) => a.price - b.price,
  highestPrice: (a: Product, b: Product) => b.price - a.price,
  highestDiscount: (a: Product, b: Product) => b.discount - a.discount,
};

export default () => {
  // promotion
  mockApi.onGet('/promotions').reply(config => [200, getPromotion]);
  //search
  mockApi.onGet(/\/search\/?.*/).reply(config => {
    const params = config.url.split('?')[1];
    const JSONParams = JSON.parse(
      `{"${params.replace(/&/g, '","').replace(/=/g, '":"')}"}`,
    );
    if (JSONParams.q === 'tenis')
      return [200, [...getSearch].sort(waysToSort[JSONParams.sort])];
    else return [200, []];
  });
};
