import { createSlice } from "@reduxjs/toolkit";
import { getSolutionAsync } from './solverAPI';
import { SolverState } from "../../common/types/types";

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
                state.solutions.push(action.payload);
            })
            .addCase(getSolutionAsync.rejected, (state, action) => {
                state.isProcessing = false;
                state.error = action.error.message as string;
        
            })
    }
});

export default solverAsyncSlice.reducer;
