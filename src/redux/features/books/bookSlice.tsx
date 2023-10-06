import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../../types/globalTypes';

const initialState: IRecentBook = {
  books: [],
  publicationRange: 2023,
  searchBooks: '',
};

export const addBook = createAsyncThunk(
  'books/addBook',
  async (bookData: IBook) => {
    return bookData;
  }
);
export const filterBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    recentBooks: (state) => {
      state.books;
    },
    allBooks: (state) => {
      state.books;
    },
    setPublicationRange: (state, action: PayloadAction<number>) => {
      state.publicationRange = action.payload;
    },
    getSearchBooks: (state, action: PayloadAction<string>) => {
      state.searchBooks = action.payload;
    },
  },
});

interface IRecentBook {
  books: IBook[];
  publicationRange: number;
  searchBooks: string;
}

export const { recentBooks, allBooks, setPublicationRange, getSearchBooks } =
  filterBooksSlice.actions;
export default filterBooksSlice.reducer;
