import { createSlice } from "@reduxjs/toolkit";
import { getSolutionAsync } from './solverAPI';
import { SolverState } from "../../common/types/types";
import { solveEquation } from "../../common/utils/solutionProcessor";

const initialState: SolverState = {
    solutions: [],
    isProcessing: false,
    error: ''
};

const solverAsyncSlice = createSlice({
    name: 'solver',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSolutionAsync.pending, (state) => {
                state.isProcessing = true;
                state.error = '';
            })
            .addCase(getSolutionAsync.fulfilled, (state, action) => {
                state.isProcessing = false;

                const { a, b, c } = action.payload;
                if (state.solutions.find(item => item.a === a && item.b === b && item.c === c)) {
                    state.error = 'Solution for given params already exists'
                }
                else {
                    const result = solveEquation(a, b, c);
                    state.solutions.push({...result, a, b, c, index: state.solutions.length});
                    state.error = initialState.error;
                }
            })
            .addCase(getSolutionAsync.rejected, (state, action) => {
                state.isProcessing = false;
                state.error = action.payload as string;
            })
    }
});

export default solverAsyncSlice.reducer;
