import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Twitter } from './types';

const initialArticleState: Twitter[] = [];

export const twittersSlice = createSlice({
  name: 'Articles',
  initialState: initialArticleState,
  reducers: {
    add: (state: Twitter[], { payload }: PayloadAction<Twitter>) => [
      ...state,
      payload,
    ],
    edit: (
      state: Twitter[],
      {
        payload,
      }: PayloadAction<{
        id: string;
        title: string;
        content: string;
        twitterName: string;
      }>,
    ) => {
      const index = state.findIndex((article) => article.id === payload.id);
      if (index === -1) return state;

      state[index] = {
        ...state[index],
        content: payload.content,
        title: payload.title,
        twitterName: payload.twitterName,
      };
    },
    delete: (state: Twitter[], { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((article) => article.id === payload.id);

      if (index === -1) return state;

      state.splice(index, 1);
    },
  },
});

export const {
  add: addTwitterActionCreator,
  edit: editTwitterActionCreator,
  delete: deleteTwitterActionCreator,
} = twittersSlice.actions;
