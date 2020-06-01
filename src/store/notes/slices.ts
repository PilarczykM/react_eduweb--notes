import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from './types';

const notesInitialState: Note[] = [];

export const notesSlice = createSlice({
  name: 'Notes',
  initialState: notesInitialState,
  reducers: {
    add: (state: Note[], { payload }: PayloadAction<Note>) => [
      ...state,
      payload,
    ],
    edit: (
      state: Note[],
      {
        payload,
      }: PayloadAction<{ id: string; title: string; content: string }>,
    ) => {
      const noteIndex = state.findIndex((note) => note.id === payload.id);

      if (noteIndex === -1) return state;

      state[noteIndex] = {
        ...state[noteIndex],
        content: payload.content,
        title: payload.title,
      };
    },
    delete: (state: Note[], { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((note) => note.id === payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const {
  add: addNoteActionCreator,
  edit: editNoteActionCreator,
  delete: deleteNoteActionCreator,
} = notesSlice.actions;
