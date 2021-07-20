import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

export {PersistGate} from 'redux-persist/integration/react';

export const initPersistor = (reduxConfig, appReducer, appSaga) => {
  const persistConfig = {
    key: 'app',
    storage: AsyncStorage,
    blacklist: [],
  };
  const {store, otherProps} = reduxConfig(
    persistReducer(persistConfig, appReducer),
    appSaga,
  );
  return {store, persistor: persistStore(store), ...otherProps};
};
