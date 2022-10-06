import { applyMiddleware, combineReducers, createStore } from "redux";
import helloWorldReducer from '../../features/HelloWorld/helloWorldSlice';
import solverReducer from '../../features/QuadraticEquationSolver/solverSlice';
import countriesReducer from '../../features/Countries/countriesSlice';
import provincesReducer from '../../features/Provinces/provincesSlice';

import thunk from 'redux-thunk';

export const createTestStore = () => (
    createStore(
        combineReducers({
            helloWorld: helloWorldReducer,
            solver: solverReducer,
            countries: countriesReducer,
            provinces: provincesReducer
        }),
        applyMiddleware(thunk)
    )
);
