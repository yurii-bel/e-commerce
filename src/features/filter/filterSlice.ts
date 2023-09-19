import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  searchTerm: string;
  selectedCategory: string;
}

const initialState: FilterState = {
  searchTerm: "",
  selectedCategory: "All",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = filterSlice.actions;

export default filterSlice.reducer;
