import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';

import Router from './routes';
import {withRootProviders, initContext} from './containers/Providers';
import {withTestableProviders, initMock} from './containers/CavyProvider';

const App = () => {
  initMock();
  initContext();
  return (
    <View style={{flex: 1, height: '100%', backgroundColor: '#000'}}>
      <Router />
    </View>
  );
};

export default withTestableProviders(withRootProviders(App));
