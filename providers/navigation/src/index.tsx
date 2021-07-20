export * from '../types/screens';
let navigationInstance: any = null;

export const getCurrentScreen = () => navigationInstance.currentRoute

export const initNavigationAdapter = (
  _navigationInstance: any = null,
  navigationDependency: any,
) => {
  navigationInstance = _navigationInstance;
  _navigationInstance.initNavigationDependency(navigationDependency);
};

export const navigate = (name: string, params?: any) => {
  navigationInstance?.navigate(name, params);
};

export const goBack = () => {
  navigationInstance?.goBack();
};

export const reset = (
  screen: string,
  {prevScreen = '', params = {}}: any = {},
) => {
  navigationInstance?.reset(screen, {prevScreen, params});
};

export const useRoute = () => {
  return navigationInstance?.useRoute();
};

export const useFocusEffect = (func: () => void, dependencies: any[] = []) => {
  navigationInstance?.useFocusEffect(func, dependencies);
};

export const initNavigation = (
  routes: Modules[],
  Header: any
) => {
  return navigationInstance?.initNavigation(
    routes,
    Header
  );
};
