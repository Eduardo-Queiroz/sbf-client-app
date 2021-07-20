import {mockApi} from '@sbf-core/api';

export default () => {
  mockApi.onPost('/cart').reply(config => {
    const {items} = JSON.parse(config.data);
    if (items.length == 1) return [200, {}];
    else return [500, {}];
  });
};
