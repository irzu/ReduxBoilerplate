import { createAsyncThunk } from '@reduxjs/toolkit';
import { solveEquationAsync } from './common/utils/solutionProcessor';
import { EquationParams } from './types';

export const getSolutionAsync = createAsyncThunk(
    'solver/getSolutionAsync',
    async(payload: EquationParams, thunkAPI) => {
        const { a, b, c } = payload;
        try {
            // Uncomment line below to demonstrate error handling
            // if (Math.random() < 0.9) return thunkAPI.rejectWithValue('Could not solve it. Gived up')
            
            const response = await solveEquationAsync(a,b,c);
            return {...payload, ...response};
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
