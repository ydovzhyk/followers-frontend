import { createSlice } from '@reduxjs/toolkit';
import { addUser, getFollower, getUsers } from './user-opetations';

const initialState = {
  users: {},
  followerId: 'new',
  message: '',
  error: null,
  countPage: 1,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: () => ({ ...initialState }),
    clearMessage: store => {
      store.message = '';
    },
    clearError: store => {
      store.error = null;
    },
  },

  extraReducers: {
    [addUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.message = payload.message;
    },
    [addUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.data.message;
    },
    [getUsers.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getUsers.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.users = payload.users;
      store.followerId = payload.followerId;
      store.countPage = payload.countPage;
    },
    [getUsers.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.data.message;
    },
    [getFollower.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getFollower.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.followerId = payload.followerId;
    },
    [getFollower.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload.data.message;
    },
  },
});

export default user.reducer;
export const { clearUser, clearMessage, clearError } = user.actions;
