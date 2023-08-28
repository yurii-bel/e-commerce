import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "../features/counter/counterSlice";
import { apiSlice } from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartProductsSlice";

export const store = configureStore({
  reducer: {
    counter: couterReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
