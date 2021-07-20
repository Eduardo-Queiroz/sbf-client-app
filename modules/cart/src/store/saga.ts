import * as Service from '../services';

import {Actions, Types} from './repository';

import {ModalServices, ModalType} from '@sbf-providers/modal';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {IconsType} from '@sbf-providers/icons';
import {State, CartItem} from '../../types';

const {
  failedCompleteOrder,
  pendingCompleteOrder,
  successCompleteOrder,
} = Actions;

function* generatorCompleteOrder(): any {
  try {
    yield put(pendingCompleteOrder());

    const cartItems: CartItem[] = yield select(({cart}: State) => cart.items);
    const formattedCartItems = cartItems.map(a => ({
      id: a.id,
      quantity: a.quantity,
    }));
    yield call(Service.completeOrder, formattedCartItems);

    yield call(ModalServices.open, ModalType.SWAL, {
      iconSize: 110,
      okButtonText: 'Ok, entendi',
      icon: IconsType.ICON_HAPPY_WARNING,
      text: 'Pedido efetuado com sucesso',
    });
    yield put(successCompleteOrder());
  } catch (err) {
    yield call(ModalServices.open, ModalType.SWAL, {
      iconSize: 110,
      okButtonText: 'Ok, entendi',
      icon: IconsType.ICON_SAD_WARNING,
      text: 'Ocorreram erros internos por favor tente mais tarde',
    });
    yield put(failedCompleteOrder(err));
  }
}
export default function* root() {
  yield all([takeLatest(Types.COMPLETE_ORDER, generatorCompleteOrder)]);
}
