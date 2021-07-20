import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';

import Router from 'routes';
import {withRootProviders, initContext} from 'containers/Providers';

const App = () => {
  initContext();
  return (
    <View style={{flex: 1, height: '100%', backgroundColor: '#000'}}>
      <Router />
    </View>
  );
};

export default withRootProviders(App);
