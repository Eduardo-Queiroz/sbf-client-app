import {createActions, createReducer} from 'reduxsauce';
import {AnyAction} from 'redux';

import {ActionProcolType} from '@sbf-providers/redux';
import {PENDING_TYPE, StateCart} from '../../types';

export interface ChangeQuantityProductDispatch {
  id: string;
  quantity: number;
}

export interface AddProductDispatch {
  product: any;
}

export interface RemoveProductDispatch {
  id: string;
}

export interface ActionTypes {
  completeOrder: () => AnyAction;
  failedCompleteOrder: (payload: any) => AnyAction;
  pendingCompleteOrder: () => AnyAction;
  successCompleteOrder: () => AnyAction;

  changeQuantityProduct: (payload: ChangeQuantityProductDispatch) => AnyAction;
  quantityAddProduct: (payload: AddProductDispatch) => AnyAction;
  quantityRemoveProduct: (payload: RemoveProductDispatch) => AnyAction;
}

const INITIAL_STATE: StateCart = {
  pending: {
    [PENDING_TYPE.COMPLETE_ORDER]: false,
  },
  itemsCount: 0,
  items: [],
};

export const {Creators: Actions, Types} = createActions<any, ActionTypes>(
  {
    completeOrder: [],
    failedCompleteOrder: ['payload'],
    pendingCompleteOrder: [],
    successCompleteOrder: [],
    //internal state
    quantityAddProduct: ['payload'],
    quantityRemoveProduct: ['payload'],
    changeQuantityProduct: ['payload'],
  },
  {prefix: 'CART_'},
);

const failed = (pendingType: PENDING_TYPE) => (state = INITIAL_STATE) => ({
  ...state,
  pending: {...state.pending, [pendingType]: false},
});

const pending = (pendingType: PENDING_TYPE) => (state = INITIAL_STATE) => ({
  ...state,
  pending: {...state.pending, [pendingType]: true},
});

const completeOrder = (pendingType: PENDING_TYPE) => (
  state = INITIAL_STATE,
) => ({
  ...state,
  pending: {...state.pending, [pendingType]: false},
  itemsCount: null,
  items: [],
});

const qtdAddProduct = (
  state = INITIAL_STATE,
  {payload}: {payload: AddProductDispatch},
) => {
  return {
    ...state,
    items: state.items.find(a => a.id == payload.product.id)
      ? state.items.map(a =>
          a.id == payload.product.id
            ? {
                id: payload.product.id,
                quantity: a.quantity + 1,
                product: payload.product,
              }
            : a,
        )
      : [
          ...state.items,
          {
            id: payload.product.id,
            quantity: 1,
            product: payload.product,
          },
        ],
    itemsCount: state.itemsCount + 1,
  };
};

const qtdRemoveProduct = (
  state = INITIAL_STATE,
  {payload}: {payload: RemoveProductDispatch},
) => {
  return {
    ...state,
    items: state.items.filter(a => a.id != payload.id),
    itemsCount:
      state.itemsCount - state.items.find(a => a.id == payload.id)?.quantity,
  };
};

const changeQuantityProduct = (
  state = INITIAL_STATE,
  {payload}: {payload: ChangeQuantityProductDispatch},
) => {
  return {
    ...state,
    items: state.items.map(a =>
      a.id == payload.id
        ? {
            id: a.id,
            quantity: a.quantity + payload.quantity,
            product: a.product,
          }
        : a,
    ),
    itemsCount: state.itemsCount + payload.quantity,
  };
};

export const HANDLERS: any = {
  [Types.FAILED_COMPLETE_ORDER]: failed(PENDING_TYPE.COMPLETE_ORDER),
  [Types.PENDING_COMPLETE_ORDER]: pending(PENDING_TYPE.COMPLETE_ORDER),
  [Types.SUCCESS_COMPLETE_ORDER]: completeOrder(PENDING_TYPE.COMPLETE_ORDER),

  [ActionProcolType.ADD_CART_ITEM]: qtdAddProduct,
  [Types.CHANGE_QUANTITY_PRODUCT]: changeQuantityProduct,
  [Types.QUANTITY_REMOVE_PRODUCT]: qtdRemoveProduct,
  [ActionProcolType.LOGOUT]: () => INITIAL_STATE,
};

export default createReducer(INITIAL_STATE, HANDLERS);
