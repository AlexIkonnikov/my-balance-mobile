import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {userReducer} from './user';

const middlewares: any = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(...middlewares);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreType = EnhancedStore<RootState>;
export type AppDispatch = typeof store.dispatch;

export default store;
