import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string | null;
  thumbnail: string;
  quantity: number; // Add this field
}

type cartState = cartItem[];

const initialState: cartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<cartItem>) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    reduceItemQuantityFromCart: (state, action: PayloadAction<cartItem>) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        return state.filter((item) => item.id !== existingItem?.id);
      }
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = state.find((item) => item.id === itemId);
      return state.filter((item) => item.id !== existingItem?.id);
    },
    clearCart: () => initialState,
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  reduceItemQuantityFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
