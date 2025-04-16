import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EquationParams, SolverState } from "./types";
import { solveEquation } from './common/utils/solutionProcessor';

const initialState: SolverState = {
    solutions: [],
};

const solverSlice = createSlice({
    name: 'solver',
    initialState,
    reducers: {
        getSolution(state, action:PayloadAction<EquationParams>) {
            const { a, b, c } = action.payload;
            const result = solveEquation(a, b, c);
            state.solutions.push({...result, a, b, c});
        },
    },
});

export const { getSolution } = solverSlice.actions;
export default solverSlice.reducer;
