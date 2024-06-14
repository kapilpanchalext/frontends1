import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
});

const store = configureStore({
    reducer: {
        global: globalSlice.reducer
    }
});

export const { setMode } = globalSlice.actions;
export default store;