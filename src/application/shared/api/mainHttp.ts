import axios from "axios";

const API_URL_OPENDOTA = "https://api.opendota.com/api/";
const API_URL_VALVE = "https://api.steampowered.com/IDOTA2Match_570/";

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
  const response = await axios[method](
    `${import.meta.env.VITE_API_URL_OPENDOTA}/${url}`,
    data,
    {
      headers: {
        Authorization: config,
      },
    }
  );
  return response.data;
};

export const valveRequest = async({
  url,
  method,
  data,
  config = {},
}:{
  url:string;
  method: Methods;
  data?: any;
  config?: any;
}) => {
  
}
