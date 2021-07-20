declare interface ScreensLocales {
  Cart: {
    title: string;
  };
}
declare interface ComponentsLocales {
  product: {
    freeShipping: string;
    delete: string;
    modelsType: string;
  };
  resumeOrder: {
    title: string;
    subtotal: string;
    discont: string;
    total: string;
    saveMoney: string;
    buttonFinish: string;
  };
}
declare interface ContainersLocales {
  EmptyCart: {
    title: string;
    subtitle: string;
    description: string;
    buttonDismiss: string;
  };
  InputSearch: {
    placeholder: string;
    cancel: string;
  };
  CatalogSearch: {
    sortBy: string;
    seeMore: string;
  };
  CatalogSpotlight: {
    title: string;
  };
  EmptySearch: {
    title: string;
  };
}

declare interface Locale {
  screens: ScreensLocales;
  components: ComponentsLocales;
  containers: ContainersLocales;
}
