import { AxiosError } from "axios";

export const formatedErrorServices = (error: any): string => {
  const err = error as AxiosError;
  console.error(err);
  const messageClient = Object.values(err.response?.data as any)[0];
  throw messageClient;
};
