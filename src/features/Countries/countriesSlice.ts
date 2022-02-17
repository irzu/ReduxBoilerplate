import { getCountries } from './countriesAPI';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesState, Country } from './types';

const initialState: CountriesState = {
    countries: [],
    isLoadingCountries: false,
    errorLoadingCountries: ''
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: {
        [getCountries.pending.type]: (state) => {
            state.isLoadingCountries = true;
            state.errorLoadingCountries = '';
        },
        [getCountries.fulfilled.type]: (state, action: PayloadAction<Country[]>) => {
            state.isLoadingCountries = false;
            state.countries = action.payload.sort((a,b) => (a.name > b.name) ? 1 : -1);
        },        
        [getCountries.rejected.type]: (state, action) => {
            state.isLoadingCountries = false;
            state.errorLoadingCountries = action.payload ? action.payload.response.statusText : action.error.message;
        }
    }
});

export default countriesSlice.reducer;
