import React, {createRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

let navigationDependency: any = null;
export let currentRoute = '';
export const navigationRef = createRef<any>();
const routeNameRef = createRef<any>();

export const useRoute = () => {
  return navigationDependency?.useRoute();
};

export const useFocusEffect = (callback, dependency) => {
  navigationDependency?.useFocusEffect(callback);
};

export const navigate = (name: string, params?: any) => {
  if (!navigationRef || !navigationRef.current) {
    return;
  }

  navigationRef.current.navigate(name, params);
};

export const openDrawer = () => {
  if (!navigationRef || !navigationRef.current) {
    return;
  }

  navigationRef.current.dispatch(
    navigationDependency?.DrawerActions.openDrawer(),
  );
};

export const closeDrawer = () => {
  if (!navigationRef || !navigationRef.current) {
    return;
  }

  navigationRef.current.dispatch(
    navigationDependency?.DrawerActions.closeDrawer(),
  );
};

export const goBack = () => {
  if (!navigationRef || !navigationRef.current) {
    return;
  }

  navigationRef.current.goBack();
};

export const reset = (
  screen: string,
  {prevScreen = '', params = {}}: any = {},
) => {
  if (!navigationRef || !navigationRef.current) {
    return;
  }

  navigationRef.current.dispatch(
    navigationDependency.CommonActions.reset({
      index: 1,
      routes: !!prevScreen
        ? [{name: prevScreen}, {name: screen, params}]
        : [{name: screen, params}],
    }),
  );
};

const useRouteTrack = (logScreen = (a: string) => {}) => {
  const initialRouteName = () => {
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    routeNameRef.current = currentRouteName;
    currentRoute = currentRouteName;
    logScreen(currentRouteName);
  };

  const currentRouteName = () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;

    routeNameRef.current = currentRouteName;
    currentRoute = currentRouteName;
    if (previousRouteName !== currentRouteName) {
      logScreen(currentRouteName);
    }
  };

  return {initialRouteName, currentRouteName};
};

const Stack = createStackNavigator();

export const initNavigation = (
  routes: Modules[],
  Header: any,
) => {
  const {initialRouteName, currentRouteName} = useRouteTrack(() => {});
  return (
    <navigationDependency.NavigationContainer
      ref={navigationRef}
      onReady={initialRouteName}
      onStateChange={currentRouteName}>
      <Stack.Navigator screenOptions={{header: Header}}>
        {routes
          .map(({name, Component, headerShown = true }) => (
            <Stack.Screen key={name} name={name} component={Component} options={{headerShown}} />
          ))}
      </Stack.Navigator>
    </navigationDependency.NavigationContainer>
  );
};

export const initNavigationDependency = (_navigationDependency: any = null) =>
  (navigationDependency = _navigationDependency);
