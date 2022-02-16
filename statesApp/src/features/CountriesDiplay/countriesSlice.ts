import { getStates } from './countriesAPI';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesState } from './types';

const initialState: CountriesState = {
    selectedCountry: 'United States',
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
        [getStates.pending.type]: (state) => {
            state.isLoadingStates = true;
            state.errorLoadingStates = '';
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
