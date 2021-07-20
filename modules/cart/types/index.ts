import {Product} from '@sbf-types/general';

export enum PENDING_TYPE {
  COMPLETE_ORDER = 'COMPLETE_ORDER',
}

type Pending = {[key in PENDING_TYPE]: boolean};

export interface CartItem {
  id: string;
  quantity: number;
  product: Product;
}

export interface StateCart {
  pending: Pending;
  itemsCount: number;
  items: CartItem[];
}

export interface State {
  app: AppState;
  cart: StateCart;
}
