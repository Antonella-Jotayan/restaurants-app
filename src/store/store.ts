import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {googleMapsApi} from './apis/googleMapsApi';
import {favoriteRestaurants} from './slices/favoriteRestaurants';
import {recentRestaurants} from './slices/recentRestaurants';
import {reduxStorage} from './storage';

const reducers = combineReducers({
  favoriteRestaurants: favoriteRestaurants.reducer,
  recentRestaurants: recentRestaurants.reducer,
  [googleMapsApi.reducerPath]: googleMapsApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whiteList: ['favoriteRestaurants'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        warnAfter: 100,
      },
    }).concat(googleMapsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const persistor = persistStore(store);
