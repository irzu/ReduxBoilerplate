import { getCountries, getStates } from './countriesAPI';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesState, Country } from './types';

const initialState: CountriesState = {
    countries: [],
    isLoadingCountries: false,
    errorLoadingCountries: '',
    selectedCountry: '',
    countryInfo: {
        data: {
            states: []
        }
    },
    isLoadingStates: false,
    errorLoadingStates: ''
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
        [getCountries.rejected.type]: (state, action) => {
            state.isLoadingCountries = false;
            state.errorLoadingCountries = action.payload ? action.payload.response.statusText : action.error.message;
        },

        [getStates.pending.type]: (state) => {
            state.isLoadingStates = true;
            state.errorLoadingCountries = '';
        },
        [getStates.fulfilled.type]: (state, action: PayloadAction<CountriesState["countryInfo"]>) => {
            state.isLoadingStates = false;
            state.countryInfo = action.payload;
        },        
        [getStates.rejected.type]: (state, action) => {
            state.isLoadingStates = false;
            state.errorLoadingStates = action.payload ? action.payload.response.statusText : action.error.message;
        }
    }
});

export const { setSelectedCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
