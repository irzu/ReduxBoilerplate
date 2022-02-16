import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import countriesReducer from './features/CountriesDiplay/countriesSlice';
const reducer = {
    countries: countriesReducer
};

const devTools = process.env.NODE_ENV === "development" ? [logger]: [];

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(devTools)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
