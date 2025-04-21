import { createAsyncThunk } from '@reduxjs/toolkit';
import { EquationParams, EquationResult } from '../../common/types/types';
import { solveEquation } from '../../common/utils/solutionProcessor'

export const solveEquationAsync = (a: number, b: number, c: number) => { 
    return new Promise<EquationResult>((resolve, reject) => {
        setTimeout(() => {
            //Uncomment line below to demo error handling
            if (Math.random() > 0.5) reject('Server error')
            const result = solveEquation(a,b,c);
            return resolve(result);
        }, 2000);
    });
};

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
