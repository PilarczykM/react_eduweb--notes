import { createSlice } from '@reduxjs/toolkit';
import { User } from './types';

const userInitialState: User = {};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
});
