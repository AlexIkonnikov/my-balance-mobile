import {createSlice} from '@reduxjs/toolkit';
import {signIn, signUp} from './thunks';

export interface UserSlice {
  email: string;
  name: string;
  surname: string;
  patronymic?: string;
  id: number | null;
  token: string | null;
}

const initialState: UserSlice = {
  email: '',
  name: '',
  surname: '',
  id: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, (state, {payload}) => {
      const {user, token} = payload;
      state = {...user, token};
      return state;
    });
    builder.addCase(signIn.fulfilled, (state, {payload}) => {
      const {user, token} = payload;
      state = {...user, token};
      return state;
    });
  },
});

export const actions = {...userSlice.actions, signUp, signIn};
export default userSlice.reducer;
