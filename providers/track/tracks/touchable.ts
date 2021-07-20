export const touchableTrack: TouchableTrack = {
  Cart: {
    trackDelete: (id: string) => `BTN_CART_PRODUCT_DELETE_${id}`,
    trackGoToDetails: 'BTN_CART_GO_TO_DETAIL',
    trackQuantityMinus: (id: string) => `BTN_CART_QUANTITY_MINUS_${id}`,
    trackQuantityPlus: (id: string) => `BTN_CART_QUANTITY_PLUS_${id}`,
    trackEmpty: `BTN_CART_EMPTY`,
    trackCompleteOrder: `BTN_COMPLETE_ORDER`,
  },
  Catalog: {
    trackSeeMore: 'BTN_CATALOG_SEE_MORE',
    trackSort: 'CATALOG_SORT',
    trackCancelSearch: 'CATALOG_CANCEL_SEARCH',
    trackAddProduct: (id: string) => `CATALOG_PRODUCT_ADD_${id}`,
  },
  Swal: {
    trackConfirm: 'BTN_SWAL_CONFIRM',
  },
};
