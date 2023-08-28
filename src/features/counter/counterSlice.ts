import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
