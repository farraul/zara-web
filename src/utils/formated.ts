import { AxiosError } from "axios";

export const formatedErrorServices = (err: AxiosError): string => {
  const messageClient = Object.values(err.response?.data as any)[1];
  console.error("Error ->", messageClient);

  throw messageClient;
};
