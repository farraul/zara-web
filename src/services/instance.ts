import axios from "axios";
import { RequestOptions } from "../models/Request";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  withCredentials: true,
  headers: {
    "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

instance.interceptors.request.use(
  (response) => response,
  (error) => {
    if (typeof window === "undefined") return;
    return Promise.reject(error);
  }
);

export const request = async ({
  method,
  endpoint,
  data,
  params,
  headers,
}: RequestOptions) => {
  if (method === "get") {
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
