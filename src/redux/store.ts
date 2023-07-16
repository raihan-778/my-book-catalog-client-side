import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './features/user/userSlice';
import { api } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
