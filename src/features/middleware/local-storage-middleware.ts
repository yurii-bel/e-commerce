import { Middleware } from "redux";

// Define a middleware function
export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action); // Call the next middleware or reducer

    // Get the state from the Redux store
    const state = store.getState();

    // Define the key for storing data in localStorage (customize as needed)
    const localStorageKey = "store-items";

    // Save the state to localStorage (you can customize this further)
    localStorage.setItem(localStorageKey, JSON.stringify(state));

    return result;
  };
