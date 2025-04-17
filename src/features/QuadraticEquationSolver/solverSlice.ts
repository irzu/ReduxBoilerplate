import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EquationParams, SolverState } from "./types";
import { solveEquation } from './common/utils/solutionProcessor';

const initialState: SolverState = {
    solutions: [],
    error: ''
};

const solverSlice = createSlice({
    name: 'solver',
    initialState,
    reducers: {
        getSolution(state, action:PayloadAction<EquationParams>) {
            const { a, b, c } = action.payload;
            if (state.solutions.find(item => item.a === a && item.b === b && item.c === c)) {
                state.error = 'Solution for given params already exists'
            }
            else {
                const result = solveEquation(a, b, c);
                state.solutions.push({...result, a, b, c, index: state.solutions.length});
                state.error = initialState.error;
            }
        },
    },
});

export const { getSolution } = solverSlice.actions;
export default solverSlice.reducer;
