// import { composeWithDevTools } from 'redux-devtools-extension';
// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './reducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

// const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, composeWithDevTools());
// console.log(process.env.NODE_ENV);
