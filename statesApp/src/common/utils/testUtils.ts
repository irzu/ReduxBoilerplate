import { combineReducers, createStore } from "redux";
import helloWorldReducer from '../../features/HelloWorld/helloWorldSlice';

export const createTestStore = () => (
    createStore(
        combineReducers({
            helloWorld: helloWorldReducer,
        })
    )
);

