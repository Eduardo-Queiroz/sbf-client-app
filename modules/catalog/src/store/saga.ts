import * as Service from '../services';
import {Actions, Types} from './repository';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {Keyboard} from 'react-native';
import {goBack, navigate, ScreenType} from '@sbf-providers/navigation';
import {State} from '../../types';

const {
  //Spotlight Products
  failedSpotlightProducts,
  pendingSpotlightProducts,
  successSpotlightProducts,

  //Search Products
  failedSearchProducts,
  pendingSearchProducts,
  successSearchProducts,

  confirmCancelSearch,
} = Actions;

function* generatorGetSpotlightProducts(): any {
  try {
    yield put(pendingSpotlightProducts());
    const {data} = yield call(Service.getSpotlightProducts);
    yield put(successSpotlightProducts(data));
  } catch (err) {
    yield put(failedSpotlightProducts(err));
  }
}

function* generatorGetSearchProducts({searchSort}: any): any {
  try {
    yield put(pendingSearchProducts());

    const {searchText, hasSearcheableProducts, _searchSort} = yield select(
      ({catalog}: State) => ({
        hasSearcheableProducts: !!catalog.visibleSearchProducts.length,
        searchText: catalog.searchText,
        _searchSort: catalog.searchSort,
      }),
    );
    if (!hasSearcheableProducts) {
      navigate(ScreenType.SEARCH_CATALOG);
    }
    const {data} = yield call(
      Service.getSearchProducts,
      searchText,
      searchSort || _searchSort,
    );
    yield put(successSearchProducts(data));
  } catch (err) {
    yield put(failedSearchProducts(err));
  }
}

function* generatorCancelSearch(): any {
  yield call(navigate, ScreenType.HOME);
  yield call(Keyboard.dismiss);
  yield put(confirmCancelSearch());
}

export default function* root() {
  yield all([
    takeLatest(Types.GET_SPOTLIGHT_PRODUCTS, generatorGetSpotlightProducts),
    takeLatest(
      [Types.GET_SEARCH_PRODUCTS, Types.ON_CHANGE_SORT_SEARCH_FIELD],
      generatorGetSearchProducts,
    ),
    takeLatest(Types.CANCEL_SEARCH, generatorCancelSearch),
  ]);
}
