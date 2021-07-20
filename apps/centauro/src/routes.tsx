import React from 'react';

import Loader from 'screens/Loader';
import Home from 'screens/Home';
import Header from 'containers/Header';

import {ScreenType, initNavigation} from '@sbf-providers/navigation';
import {useRoutes} from '@sbf-providers/module';

const Router: React.FC = () => {
  const routes = useRoutes();
  const allRoutes = [
    {name: ScreenType.LOADER, Component: Loader, headerShown: false},
    {name: ScreenType.HOME, Component: Home},
    ...routes,
  ];
  return initNavigation(allRoutes, Header);
};

export default Router;
