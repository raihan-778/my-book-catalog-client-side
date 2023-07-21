import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryFilter: '', // Stores the selected category for filtering
  searchQuery: '', // Stores the search query string
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCategoryFilter, setSearchQuery } = filtersSlice.actions;
export default filtersSlice.reducer;
