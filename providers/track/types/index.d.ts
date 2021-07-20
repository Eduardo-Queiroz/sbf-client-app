declare interface TouchableTrack {
  Cart: {
    trackDelete: (id: string) => string;
    trackGoToDetails: string;
    trackQuantityMinus: (id: string) => string;
    trackQuantityPlus: (id: string) => string;
    trackEmpty: string;
    trackCompleteOrder: string;
  };
  Catalog: {
    trackSeeMore: string;
    trackSort: string;
    trackCancelSearch: string;
    trackAddProduct: (id: string) => string;
  };
  Swal: {
    trackConfirm: string;
  };
}

declare interface InputTrack {
  Catalog: {
    trackSearch: string;
  };
}

declare interface TextTrack {
  Cart: {
    trackItemCount: string;
    trackSubtotal: string;
    trackDiscont: string;
    trackTotal: string;
    trackSaveMoney: string;
    trackQuantity: string;
  };
  Swal: {
    trackText: string;
  };
}

declare interface Tracks {
  inputTrack: InputTrack;
  touchableTrack: TouchableTrack;
  textTrack: TextTrack;
}
