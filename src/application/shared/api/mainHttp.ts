import axios from "axios";

const API_URL = "https://api.opendota.com/api/";

type Methods = "put" | "post" | "delete" | "get" | "head" | "options";
export const request = async ({
  url,
  method,
  data,
  config = {},
}: {
  url: string;
  method: Methods;
  data?: any;
  config?: any;
}) => {
  const response = await axios[method](`${API_URL}/${url}`, data, {
    headers: {
      Authorization: config,
    },
  });
  return response.data;
};
