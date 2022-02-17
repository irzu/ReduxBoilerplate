import { createAsyncThunk } from '@reduxjs/toolkit';
import { EquationParams, EquationResult } from '../../types';

export const solveEquation = (a: number, b: number, c: number): EquationResult => {
    const delta = b * b - 4 * a * c;

    if (delta > 0) return { 
        root1: ((-b + Math.sqrt(delta)) / (2 * a)).toString(), 
        root2: ((-b - Math.sqrt(delta)) / (2 * a)).toString()
    };
    
    if (delta === 0) return {
        root1: (-b / (2 * a)).toString(),
        root2: (-b / (2 * a)).toString()
    };
    
    const realPart = (-b / (2 * a)).toFixed(2);
    const imagPart = (Math.sqrt(-delta) / (2 * a)).toFixed(2);
    return {
        root1: `${realPart} + ${imagPart}i`,
        root2: `${realPart} - ${imagPart}i`
    }; 
};

const solveEquationAsync = (a: number, b: number, c: number) => { 
    return new Promise<EquationResult>((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                const result = solveEquation(a,b,c);
                return resolve(result);
            }
            else {
                reject(new Date().getMilliseconds());
            }
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
