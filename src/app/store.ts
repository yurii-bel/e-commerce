import { Middleware, configureStore } from "@reduxjs/toolkit";
import couterReducer from "../features/counter/counterSlice";
import { apiSlice } from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartProductsSlice";
import { localStorageMiddleware } from "../features/middleware/local-storage-middleware";

const middlewares: Middleware[] = [localStorageMiddleware];

// Load data from local storage
const localStorageKey = "store-items";
const savedStateJSON = localStorage.getItem(localStorageKey);
const preloadedState = savedStateJSON ? JSON.parse(savedStateJSON) : undefined;

export const store = configureStore({
  reducer: {
    counter: couterReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(middlewares),
  preloadedState: preloadedState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
