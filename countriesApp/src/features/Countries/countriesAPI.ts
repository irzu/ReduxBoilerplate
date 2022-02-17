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
