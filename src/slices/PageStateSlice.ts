import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Pages } from "../enums/Pages";

export interface PageState {
    value : Pages
}

const initialState: PageState = { value: Pages.HOME}

export const PageStateSlice = createSlice({
    initialState: initialState,
    name: 'page',
    reducers: {
        setValue: (state, actions: PayloadAction<Pages>) => {
            state.value = actions.payload
        }
    }
});

export const { setValue } = PageStateSlice.actions;

export default PageStateSlice.reducer;