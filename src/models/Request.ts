export interface RequestOptions {
  endpoint: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  data?: Record<string, unknown> | FormData;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}
