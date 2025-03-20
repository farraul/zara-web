import axios from 'axios';
import { formatedErrorServices } from '../utils/formated';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window === 'undefined') return;
    const errorFormated = formatedErrorServices(error);
    return Promise.reject(errorFormated);
  }
);

interface RequestOptions {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  data?: Record<string, unknown> | FormData;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export const request = async ({
  method,
  endpoint,
  data,
  params,
  headers,
}: RequestOptions) => {
  if (method === 'get') {
    const { data } = await instance.get(endpoint, { params });
    return data;
  } else {
    const response = await instance[method](endpoint, data, {
      params,
      headers,
    });
    return response.data;
  }
};

export default instance;
