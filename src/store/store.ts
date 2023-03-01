import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {googleMapsApi} from './apis/googleMapsApi';

const reducers = combineReducers({
  [googleMapsApi.reducerPath]: googleMapsApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
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
