import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from './types';

const initialArticleState: Article[] = [];

export const articlesSlice = createSlice({
  name: 'Articles',
  initialState: initialArticleState,
  reducers: {
    add: (state: Article[], { payload }: PayloadAction<Article>) => {
      return [...state, payload];
    },
    edit: (
      state: Article[],
      {
        payload,
      }: PayloadAction<{
        id: string;
        title: string;
        content: string;
        articleUrl: string;
      }>,
    ) => {
      const index = state.findIndex((article) => article.id === payload.id);
      if (index === -1) return state;

      state[index] = {
        ...state[index],
        content: payload.content,
        title: payload.title,
        articleUrl: payload.articleUrl,
      };
    },
    delete: (state: Article[], { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((article) => article.id === payload.id);

      if (index === -1) return state;

      state.splice(index, 1);
    },
  },
});

export const {
  add: addArticleActionCreator,
  edit: editArticleActionCreator,
  delete: deleteArticleActionCreator,
} = articlesSlice.actions;
