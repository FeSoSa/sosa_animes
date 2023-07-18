'server-side'

import dotenv from 'dotenv';
dotenv.config();
import axios, { AxiosResponse } from "axios";
import apiVariables from "./apiVariables";


export const getTrailers = async (id: number, type: string) => {
  const BASE_URL = apiVariables.base.base_url;
  const KEY = process.env.TMDB_KEY


  if (id < 1) {
    // Lidar com a situação de ID inválido
    // Retornar um valor padrão ou lançar um erro, dependendo dos requisitos do seu código
    return null;
  }

  try {
    const response: AxiosResponse<any> = await axios.get(`${BASE_URL}${type}/${id}/videos?api_key=${KEY}&language=en-US`);

    const { data } = response;

    return data;
  } catch (error) {

    console.log(error);

  }
};
