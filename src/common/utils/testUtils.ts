import { combineReducers, createStore } from "redux";
import helloWorldReducer from '../../features/HelloWorld/helloWorldSlice';
import solverReducer from '../../features/QuadraticEquationSolver/solverSlice';

export const createTestStore = () => (
    createStore(
        combineReducers({
            helloWorld: helloWorldReducer,
            solver: solverReducer,
        })
    )
);

