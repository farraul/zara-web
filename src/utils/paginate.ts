export const getParamsPaginate = (
  offset: number,
  limit: number,
  search: string
) => {
  const params = new URLSearchParams();
  params.append("offset", String(offset));
  params.append("limit", String(limit));
  params.append("search", String(search?.toLowerCase() ?? ""));
  return params;
};
