import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types';
import { login } from './userThunk'

const userInitialState: User = {
  email: null,
  token: null,
  uid: null,
  isLoggedIn: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    logout: (state, action: PayloadAction) => {
      return {
        email: null,
        token: null,
        isLoggedIn: false,
        uid: null
      }
      }
  },
  extraReducers: {
    [login.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ email: string, token: string, uid: string }>
    ) => {
      return {
        email: payload.email,
        token: payload.token,
        isLoggedIn: true,
        uid: payload.uid
      }
    }
  }
});

export const {
  logout: logoutActionCreator
} = userSlice.actions