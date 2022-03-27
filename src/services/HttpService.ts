import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { StoreType } from 'store/store';
import { API_URL } from 'react-native-dotenv';

let store: StoreType;
export const injectStore = (_store: StoreType): void => {
  store = _store;
};

class HttpService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.instance.interceptors.request.use((config) => {
      const token = store.getState().user.token;
      if (token && config.headers) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  post(url: string, { data }: AxiosRequestConfig) {
    return this.instance.post(url, data);
  }

  get(url: string) {
    return this.instance.get(url);
  }

  patch(url: string, { data }: AxiosRequestConfig) {
    return this.instance.patch(url, data);
  }

  async delete(url: string) {
    return await this.instance.delete(url);
  }
}

export default new HttpService();
