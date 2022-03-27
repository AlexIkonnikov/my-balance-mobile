import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpRequest, signInRequest } from 'api';
import { UserCreateRequest, UserLoginRequest } from 'interfaces/user';

export const signUp = createAsyncThunk('user/registration', async (user: UserCreateRequest) => {
  const { data } = await signUpRequest(user);
  return data;
});

export const signIn = createAsyncThunk('user/login', async (user: UserLoginRequest) => {
  const { data } = await signInRequest(user);
  return data;
});
