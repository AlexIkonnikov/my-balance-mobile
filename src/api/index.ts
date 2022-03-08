import {AxiosPromise} from 'axios';
import {
  UserCreateRequest,
  UserCreateResponce,
  UserLoginRequest,
} from '../interfaces/user';
import {HttpService} from '../services';

const ENDPOINTS = {
  AUTH_REGISTRATION: 'auth/registration',
  AUTH_LOGIN: 'auth/login',
  TRANSCTIONS: 'transactions',
};

export const signUpRequest = (
  data: UserCreateRequest,
): AxiosPromise<UserCreateResponce> => {
  return HttpService.post(ENDPOINTS.AUTH_REGISTRATION, {data});
};

export const signInRequest = (
  data: UserLoginRequest,
): AxiosPromise<UserCreateResponce> => {
  return HttpService.post(ENDPOINTS.AUTH_LOGIN, {data});
};

export const getTransactionPerMounth = (
  start: string,
  end: string,
): AxiosPromise<{total: number; date: string}[]> => {
  return HttpService.get(
    `${ENDPOINTS.TRANSCTIONS}?date_end=${end}&date_start=${start}`,
  );
};
