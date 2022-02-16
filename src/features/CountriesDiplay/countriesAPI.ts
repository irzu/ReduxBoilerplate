import { CountryInfoProps } from './types';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCountries = createAsyncThunk(
    'countries/getCountries',
    (payload, thunkAPI) => axios
        .get(`https://api.sampleapis.com/countries/countries`)
        .then(response => response.data)
        .catch(error => {
            if (!error.response) throw new Error(error);
            return thunkAPI.rejectWithValue(error);
        })
);

export const getStates = createAsyncThunk(
    'countries/getStates',
    (payload: CountryInfoProps , thunkAPI) => axios
        .post(`https://countriesnow.space/api/v0.1/countries/states`, {country: payload.selectedCountry})
        .then(response => response.data)
        .catch(error => {
            if (!error.response) throw new Error(error);
            return thunkAPI.rejectWithValue(error);
        })
);
