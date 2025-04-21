import { createAsyncThunk } from '@reduxjs/toolkit';
import { EquationParams } from '../../common/types/types';
import { solveEquationAsync } from './common/utils/solutionProcessor';

export const getSolutionAsync = createAsyncThunk(
    'solver/getSolutionAsync',
    async(payload: EquationParams, thunkAPI) => {
        const { a, b, c } = payload;
        try {
            const response = await solveEquationAsync(a,b,c);
            return {...payload, ...response};
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
