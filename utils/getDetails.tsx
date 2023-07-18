import axios, { AxiosResponse } from "axios";
import apiVariables from "./apiVariables";

export const getDetails = async (type: string, id: string,lang:string) => {
  const BASE_URL = apiVariables.base.base_url;
  const KEY = process.env.TMDB_KEY;

  try {
    const response: AxiosResponse<any> = await axios.get(
      `${BASE_URL}${type}/${id}?api_key=${KEY}&language=${lang}`
    );

    const { data } = response;

    return data;
  } catch (error) {
    console.log(error);
    throw error; // opcional: rejeitar a promessa com o erro para tratar no componente
  }
};
