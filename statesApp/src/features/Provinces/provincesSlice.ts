import { getStates } from './provincesApi';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProvincesState } from './types';

const initialState: ProvincesState = {
    provincesInfo: {
        data: {
            states: []
        }
    },
    isLoadingProvinces: false,
    errorLoadingProvinces: ''
};

const provincesSlice = createSlice({
    name: 'provinces',
    initialState,
    reducers: {},
    extraReducers: {
        [getStates.pending.type]: (state) => {
            state.isLoadingProvinces = true;
            state.errorLoadingProvinces = '';
        },
        [getStates.fulfilled.type]: (state, action: PayloadAction<ProvincesState["provincesInfo"]>) => {
            state.isLoadingProvinces = false;
            state.provincesInfo = action.payload;
        },        
        [getStates.rejected.type]: (state, action) => {
            state.isLoadingProvinces = false;
            state.errorLoadingProvinces = action.payload ? action.payload.response.statusText : action.error.message;
        }
    }
});

export default provincesSlice.reducer;
