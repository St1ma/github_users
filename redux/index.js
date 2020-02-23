import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['users'],
  timeout: 3600000,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
