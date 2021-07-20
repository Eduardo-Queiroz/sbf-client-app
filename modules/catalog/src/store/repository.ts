import {createActions, createReducer} from 'reduxsauce';
import {AnyAction} from 'redux';
import {ActionProcolType} from '@sbf-providers/redux';
import {
  PENDING_TYPE,
  SEARCH_PAGE_SIZE,
  SORT_OPTIONS,
  StateCatalog,
} from '../../types';

export interface SuccessSpotlightProductsDispatch {
  spotlightProducts: any[];
}

export interface SuccessSearchProductsDispatch {
  searchProducts: any[];
}

export interface FailedDispatch {
  err: any;
}

export interface ActionTypes {
  getSpotlightProducts: () => AnyAction;
  failedSpotlightProducts: (payload: FailedDispatch) => AnyAction;
  pendingSpotlightProducts: () => AnyAction;
  successSpotlightProducts: (
    payload: SuccessSpotlightProductsDispatch,
  ) => AnyAction;

  getSearchProductsNextPage: () => AnyAction;
  getSearchProducts: () => AnyAction;
  failedSearchProducts: (payload: FailedDispatch) => AnyAction;
  pendingSearchProducts: () => AnyAction;
  successSearchProducts: (payload: SuccessSearchProductsDispatch) => AnyAction;

  onChangeSortSearchField: (payload: SORT_OPTIONS) => AnyAction;
  onChangeSearchField: (payload: string) => AnyAction;
  cancelSearch: () => AnyAction;
  confirmCancelSearch: () => AnyAction;
}

const INITIAL_STATE: StateCatalog = {
  pending: {
    [PENDING_TYPE.SPOTLIGHT]: false,
    [PENDING_TYPE.SEARCH]: false,
  },
  spotlightProducts: [],
  visibleSearchProducts: [],
  allSearchProducts: [],
  searchText: '',
  searchHasMorePage: false,
  searchPage: 1,
  searchSort: SORT_OPTIONS.RELEVANCE,
};

export const {Creators: Actions, Types} = createActions<any, ActionTypes>(
  {
    //Spotlight Products
    getSpotlightProducts: [],
    failedSpotlightProducts: ['err'],
    pendingSpotlightProducts: [],
    successSpotlightProducts: ['spotlightProducts'],

    //Search Products
    getSearchProducts: ['searchTerm'],
    getSearchProductsNextPage: [],
    failedSearchProducts: ['err'],
    pendingSearchProducts: [],
    successSearchProducts: ['searchProducts'],

    //internal state
    onChangeSortSearchField: ['searchSort'],
    onChangeSearchField: ['searchText'],
    cancelSearch: [],
    confirmCancelSearch: [],
  },
  {prefix: 'CATALOG_'},
);

const failed = (pendingType: PENDING_TYPE) => (state = INITIAL_STATE) => ({
  ...state,
  pending: {...state.pending, [pendingType]: false},
});

const pending = (pendingType: PENDING_TYPE) => (state = INITIAL_STATE) => ({
  ...state,
  pending: {...state.pending, [pendingType]: true},
});

const successGetSpotlightProducts = (pendingType: PENDING_TYPE) => (
  state = INITIAL_STATE,
  action: SuccessSpotlightProductsDispatch,
) => {
  return {
    ...state,
    pending: {...state.pending, [pendingType]: false},
    spotlightProducts: action.spotlightProducts,
  };
};

const successGetSearchProducts = (pendingType: PENDING_TYPE) => (
  state = INITIAL_STATE,
  action: SuccessSearchProductsDispatch,
) => {
  return {
    ...state,
    searchFocus: false,
    searchPage: 1,
    visibleSearchProducts: action.searchProducts.slice(0, SEARCH_PAGE_SIZE),
    allSearchProducts: action.searchProducts,
    searchHasMorePage: action.searchProducts.length > SEARCH_PAGE_SIZE,
    pending: {...state.pending, [pendingType]: false},
  };
};

const successGetSearchProductsNextPage = (state = INITIAL_STATE) => {
  const newSearchPage = state.searchPage + 1;
  return {
    ...state,
    searchPage: newSearchPage,
    visibleSearchProducts: state.allSearchProducts.slice(
      0,
      newSearchPage * SEARCH_PAGE_SIZE,
    ),
    searchHasMorePage:
      state.allSearchProducts.length > SEARCH_PAGE_SIZE * newSearchPage,
  };
};

const onChangeSortSearchField = (state = INITIAL_STATE, action: any) => ({
  ...state,
  searchSort: action.searchSort,
});

const onChangeSearchField = (state = INITIAL_STATE, action: any) => ({
  ...state,
  searchText: action.searchText,
});

const cancelSearch = (state = INITIAL_STATE) => ({
  ...state,
  visibleSearchProducts: [],
  allSearchProducts: [],
  searchText: '',
  searchFocus: false,
  searchHasMorePage: false,
  searchPage: 0,
  searchSort: SORT_OPTIONS.RELEVANCE,
});

export const HANDLERS = {
  [Types.FAILED_SPOTLIGHT_PRODUCTS]: failed(PENDING_TYPE.SPOTLIGHT),
  [Types.PENDING_SPOTLIGHT_PRODUCTS]: pending(PENDING_TYPE.SPOTLIGHT),
  [Types.SUCCESS_SPOTLIGHT_PRODUCTS]: successGetSpotlightProducts(
    PENDING_TYPE.SPOTLIGHT,
  ),

  [Types.FAILED_SEARCH_PRODUCTS]: failed(PENDING_TYPE.SEARCH),
  [Types.GET_SEARCH_PRODUCTS_NEXT_PAGE]: successGetSearchProductsNextPage,
  [Types.PENDING_SEARCH_PRODUCTS]: pending(PENDING_TYPE.SEARCH),
  [Types.SUCCESS_SEARCH_PRODUCTS]: successGetSearchProducts(
    PENDING_TYPE.SEARCH,
  ),
  [Types.ON_CHANGE_SORT_SEARCH_FIELD]: onChangeSortSearchField,
  [Types.ON_CHANGE_SEARCH_FIELD]: onChangeSearchField,
  [Types.CONFIRM_CANCEL_SEARCH]: cancelSearch,

  [ActionProcolType.LOGOUT]: () => INITIAL_STATE,
};

export default createReducer(INITIAL_STATE, HANDLERS);
