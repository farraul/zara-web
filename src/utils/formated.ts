import { AxiosError } from "axios";

export const formatedErrorServices = (err: AxiosError): string => {
  const messageClient = Object.values(
    err.response?.data as object
  )[1] as string;
  console.error("Error ->", messageClient);

  return messageClient;
};
