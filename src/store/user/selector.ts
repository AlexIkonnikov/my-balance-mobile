import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../store';

const userSlice = (state: RootState) => state.user;

const selectToken = createSelector(userSlice, ({ token }) => token);
const selectUser = createSelector(userSlice, (user) => user);
const selectName = createSelector(userSlice, ({ name, patronymic }) => ({
  name,
  patronymic,
}));

export default { selectToken, selectUser, selectName };
