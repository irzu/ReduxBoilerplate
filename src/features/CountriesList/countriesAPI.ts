import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCountries = createAsyncThunk(
    'countries/getCountries',
     (payload, thunkAPI) => axios
        // .get(`https://api.sampleapis.com/countries/countries`)
        .get('http://localhost:5000')
        .then(response => response.data)
        .catch((error: AxiosError) => {
            console.log('EE', error)
            return thunkAPI.rejectWithValue(error);
        })
);

