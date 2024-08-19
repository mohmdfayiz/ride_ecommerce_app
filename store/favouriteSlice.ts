import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { items: string[] } = { items: [] }

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item !== action.payload);
        },
    },
})

export const { addItem, removeItem } = favouriteSlice.actions;
export default favouriteSlice.reducer;