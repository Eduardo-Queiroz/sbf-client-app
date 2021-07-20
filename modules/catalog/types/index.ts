import {Product} from '@sbf-types/general';

export const SEARCH_PAGE_SIZE = 6;

export enum PENDING_TYPE {
  SPOTLIGHT = 'SPOTLIGHT',
  SEARCH = 'SEARCH',
}

type Pending = {[key in PENDING_TYPE]: boolean};

export enum SORT_OPTIONS {
  RELEVANCE = 'relevance',
  LOWEST_PRICE = 'lowestPrice',
  HIGHEST_PRICE = 'highestPrice',
  HIGHEST_DISCOUNT = 'highestDiscount',
}

export interface StateCatalog {
  pending: Pending;
  spotlightProducts: Product[];
  visibleSearchProducts: Product[];
  allSearchProducts: Product[];
  searchText: string;
  searchHasMorePage: boolean;
  searchPage: number;
  searchSort: SORT_OPTIONS;
}

export interface State {
  app: AppState;
  catalog: StateCatalog;
}
