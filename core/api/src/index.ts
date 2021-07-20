import axios, {AxiosInstance} from 'axios';
import {useConfig} from '@sbf-providers/config';
import MockAdapter from 'axios-mock-adapter';

export let api: AxiosInstance;

// defined in build time
export const mockApi: MockAdapter =
  process.env.NODE_ENV?.trim() === 'test' ? new MockAdapter(axios) : {};

export const initAxios = () => {
  const {BASE_URL} = useConfig();
  api = axios.create({
    baseURL: `${BASE_URL}`,
  });
};
