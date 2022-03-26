import {AxiosPromise, AxiosResponse} from 'axios';
import {
  CreateTransactionDto,
  Transaction,
  TransactionResponse,
} from '../interfaces/transaction';
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

export const getTransactionPerMounth = async (
  start: string,
  end: string,
): Promise<TransactionResponse> => {
  const {data} = await HttpService.get(
    `${ENDPOINTS.TRANSCTIONS}/${start}/${end}`,
  );
  return data;
};

export const deleteTransaction = (
  id: number,
): Promise<AxiosResponse<Transaction>> => {
  return HttpService.delete(`${ENDPOINTS.TRANSCTIONS}/${id}`);
};

export const createTransaction = (
  data: CreateTransactionDto,
): Promise<AxiosResponse<Transaction>> => {
  return HttpService.post(ENDPOINTS.TRANSCTIONS, {data});
};
