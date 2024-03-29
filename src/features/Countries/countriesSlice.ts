import { getCountries } from './countriesAPI';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesState, Country, ResponseError } from './types';

const initialState: CountriesState = {
    countries: [],
    isLoadingCountries: false,
    errorLoadingCountries: '',
    selectedCountry: ''
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setSelectedCountry(state, action: PayloadAction<string>) {
            state.selectedCountry = action.payload;
        }
    },
    extraReducers: {
        [getCountries.pending.type]: (state) => {
            state.isLoadingCountries = true;
            state.errorLoadingCountries = '';
        },
        [getCountries.fulfilled.type]: (state, action: PayloadAction<Country[]>) => {
            state.isLoadingCountries = false;
            state.countries = action.payload.sort((a,b) => (a.name > b.name) ? 1 : -1);
        },        
        [getCountries.rejected.type]: (state, action: PayloadAction<ResponseError, never, never, Error>) => {
            state.isLoadingCountries = false;
            state.errorLoadingCountries = action.payload ? action.payload.response.statusText : action.error.message;
        }
    }
});

export const { setSelectedCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
