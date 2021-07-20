/* eslint-disable no-undef */
import {AppRegistry} from 'react-native';
import AppProd from 'App';
import AppTest from 'AppTest';
import {name as appName} from './app.json';

//defined in build ti
const App =
  __DEV__ && process.env.NODE_ENV?.trim() === 'test' ? AppTest : AppProd;
AppRegistry.registerComponent(appName, () => App);
