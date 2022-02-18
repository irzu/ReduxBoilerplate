import { getProvinces } from './provincesApi';
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
        [getProvinces.pending.type]: (state) => {
            state.isLoadingProvinces = true;
            state.errorLoadingProvinces = '';
        },
        [getProvinces.fulfilled.type]: (state, action: PayloadAction<ProvincesState["provincesInfo"]>) => {
            state.isLoadingProvinces = false;
            state.provincesInfo = action.payload;
        },        
        [getProvinces.rejected.type]: (state, action) => {
            state.isLoadingProvinces = false;
            state.errorLoadingProvinces = action.payload ? action.payload.response.statusText : action.error.message;
        }
    }
});

export default provincesSlice.reducer;
