import {api} from '@sbf-core/api';

export const getSpotlightProducts = (): Promise<any> => {
  return api.get('/promotions');
};

export const getSearchProducts = (
  searchText: string,
  sort: string,
): Promise<any> => {
  return api.get(`/search?q=${searchText}&sort=${sort}`);
};
