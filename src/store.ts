import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import helloWorldReducer from './features/HelloWorld/helloWorldSlice';
// import solverReducer from './features/QuadraticEquationSolver/solverSlice';
// import countriesReducer from './features/Countries/countriesSlice';
// import provincesReducer from './features/Provinces/provincesSlice';

const reducer = {
    helloWorld: helloWorldReducer,
    // solver: solverReducer,
    // countries: countriesReducer,
    // provinces: provincesReducer
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
