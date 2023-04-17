import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  axiosGetUsers,
  axiosAddUser,
  axiosUpdateUser,
  axiosGetFollower,
} from 'api/user';

export const addUser = createAsyncThunk(
  'user/add',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosAddUser(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getUsers = createAsyncThunk(
  'user/',
  async (userData, { rejectWithValue }) => {
    const userId = userData.userId;
    try {
      const data = await axiosGetUsers(userData);
      if (userId === 'new') {
        localStorage.setItem('followerIdNew', JSON.stringify(data.followerId));
      }
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getFollower = createAsyncThunk(
  'user/follower',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosGetFollower();
      localStorage.setItem('followerIdNew', JSON.stringify(data.followerId));
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/follow',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosUpdateUser(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
