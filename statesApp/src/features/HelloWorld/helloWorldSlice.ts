import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HelloWorldState } from "./types";

const initialState: HelloWorldState = {
    userName: ''
};

const helloWorldSlice = createSlice({
    name: 'helloWorld',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.userName = action.payload;
        },
    }
});

export const { setName } = helloWorldSlice.actions;
export default helloWorldSlice.reducer;
