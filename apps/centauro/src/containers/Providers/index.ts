export {initContext} from './context';

import theme from 'theme';
import config from 'config';
import locale from 'locales';
import modules from './modules';
import Footer from '../Footer';
import elements from '@sbf-core/elements';
import components from '@sbf-core/components';
import icons from '@sbf-core/icons';

import {reducer, saga} from '@sbf-core/redux';
import {initRedux} from '@sbf-providers/redux';
import {Provider as ReduxProvider} from 'react-redux';
// import {PersistGate, initPersistor} from '@sbf-core/redux-persist';
import {TrackProvider} from '@sbf-providers/track';
import {ThemeProvider} from '@sbf-providers/theme';
import {LocaleProvider} from '@sbf-providers/locale';
import {ConfigProvider} from '@sbf-providers/config';
import {ModuleProvider} from '@sbf-providers/module';
import {ComponentProvider, ComponentsType} from '@sbf-providers/components';
import {IconProvider} from '@sbf-providers/icons';
import {ElementProvider} from '@sbf-providers/elements';
import {withProviders} from '@sbf-core/util';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ModalManager} from '@sbf-providers/modal';

export const withRootProviders = (RootComponent: Element) => {
  const {store} = initRedux(reducer, saga);
  return withProviders(
    // [PersistGate, {persistor}],
    TrackProvider,
    [ReduxProvider, {store}],
    [ThemeProvider, {theme}],
    [ConfigProvider, {config}],
    [LocaleProvider, {locale}],
    [IconProvider, {icons}],
    [ElementProvider, {elements}],
    [
      ComponentProvider,
      {components: {...components, [ComponentsType.FOOTER]: Footer}},
    ],
    SafeAreaProvider,
    [ModalManager, {modules}],
    [ModuleProvider, {modules}],
  )(RootComponent);
};
