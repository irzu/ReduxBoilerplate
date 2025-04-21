import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from './countriesAPI';
import { CountriesState } from './types';
import { Country as CountryType } from '../CountriesList/types';

const initialState: CountriesState = {
    countries: [],
    isLoadingCountries: false,
    errorLoadingCountries: ''
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCountries.pending, (state) => {
                state.isLoadingCountries = true;
                state.errorLoadingCountries = '';
            })
            .addCase(getCountries.fulfilled, (state, action) => {
                state.isLoadingCountries = false;
                state.countries = action.payload.sort((a: CountryType, b: CountryType) => (a.name > b.name) ? 1 : -1);
            })
            .addCase(getCountries.rejected, (state, action) => {
                state.isLoadingCountries = false;
                state.errorLoadingCountries = action.error.message as string;
        
            })
    }
});

export default countriesSlice.reducer;
