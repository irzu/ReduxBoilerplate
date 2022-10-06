import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Solution, SolverState } from "./types";
import { getSolutionAsync } from './solverAPI';

const initialState: SolverState = {
    solutions: [],
    isProcessing: false,
    processingError: ''
};

const solverSlice = createSlice({
    name: 'solver',
    initialState,
    reducers: {
        // getSolution(state, action:PayloadAction<EquationParams>) {
        //     const { a, b, c } = action.payload;
        //     const result = solveEquation(a, b, c);
        //     state.solutions.push({...result, a, b, c});
        // },
    },
    extraReducers: {
        [getSolutionAsync.pending.type]: (state) => {
            state.isProcessing = true;
            state.processingError = '';
        },
        [getSolutionAsync.fulfilled.type]: (state, action: PayloadAction<Solution>) => {
            state.isProcessing = false;
            state.solutions.push(action.payload);
        },
        [getSolutionAsync.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isProcessing = false;
            state.processingError = action.payload;
        }
    }
});

// export const { getSolution } = solverSlice.actions;
export default solverSlice.reducer;
