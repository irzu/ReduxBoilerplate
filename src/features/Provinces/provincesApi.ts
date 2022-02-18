import { ProvincesProps } from './types';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProvinces = createAsyncThunk(
    'provinces/getProvinces',
    (payload: ProvincesProps , thunkAPI) => axios
        .post(`https://countriesnow.space/api/v0.1/countries/states`, {country: payload.selectedCountry})
        .then(response => response.data)
        .catch(error => {
            if (!error.response) throw new Error(error);
            return thunkAPI.rejectWithValue(error);
        })
);
