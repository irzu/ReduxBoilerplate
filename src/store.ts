import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from 'redux-logger';
import countriesReducer from './features/CountriesList/countriesSlice';
import helloWorldReducer from './features/HelloWorld/helloWorldSlice';
import solverReducer from './features/QuadraticEquationSolver/solverSlice';
import solverAsyncReducer from './features/QuadraticEquationSolverAsync/solverAsyncSlice';

const reducer = {
    helloWorld: helloWorldReducer,
    solver: solverReducer,
    solverAsync: solverAsyncReducer,
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
