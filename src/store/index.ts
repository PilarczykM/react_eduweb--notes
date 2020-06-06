import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { articlesSlice } from './articles/slice';
import { notesSlice } from './notes/slices';
import { twittersSlice } from './twitters/slices';
import { userSlice } from './user/slices';

const reducer = {
  notes: notesSlice.reducer,
  articles: articlesSlice.reducer,
  twitters: twittersSlice.reducer,
  user: userSlice.reducer,
};

const middleware = [...getDefaultMiddleware()];
export const store = configureStore({
  reducer,
  middleware,
});
