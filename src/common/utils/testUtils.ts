import { applyMiddleware, combineReducers, createStore } from "redux";
import helloWorldReducer from '../../features/HelloWorld/helloWorldSlice';
import solverReducer from '../../features/QuadraticEquationSolver/solverSlice';
import thunk from 'redux-thunk'

export const createTestStore = () => (
    createStore(
        combineReducers({
            helloWorld: helloWorldReducer,
            solver: solverReducer,
        }),
        applyMiddleware(thunk)
    )
);
