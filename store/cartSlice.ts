import { CartItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { items: CartItem[] } = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
        },
        resetCart: () => initialState
    },
});

export const { addItem, removeItem, updateQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;