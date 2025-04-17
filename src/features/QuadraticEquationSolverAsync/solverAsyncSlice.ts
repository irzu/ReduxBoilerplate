import { createSlice } from "@reduxjs/toolkit";
import { getSolutionAsync } from './solverAsyncAPI';
import { SolverState } from "./types";

const initialState: SolverState = {
    solutions: [],
    isProcessing: false,
    processingError: '',
};

const solverAsyncSlice = createSlice({
    name: 'solverAsync',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSolutionAsync.pending, (state) => {
                state.isProcessing = true;
                state.processingError = '';
            })
            .addCase(getSolutionAsync.fulfilled, (state, action) => {
                state.isProcessing = false;
                state.solutions.push(action.payload);
            })
            .addCase(getSolutionAsync.rejected, (state, action) => {
                state.isProcessing = false;
                state.processingError =  action.payload as string
            })
    }
});

export default solverAsyncSlice.reducer;
