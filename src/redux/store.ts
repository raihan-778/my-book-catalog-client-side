import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './features/user/userSlice';
import { api } from './api/apiSlice';
import BookReducer from './features/books/bookSlice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    book: BookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
