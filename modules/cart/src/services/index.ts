import {api} from '@sbf-core/api';

export const completeOrder = (items: any[]): Promise<any> => {
  return api.post('/cart', {items});
};
