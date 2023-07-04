'server-side'

import dotenv from 'dotenv';
dotenv.config();
import axios, { AxiosResponse } from "axios";
import apiVariables from "./apiVariables";


export const getDetails = async (id:string, type: string) => {
  const BASE_URL = apiVariables.base.base_url;
  const KEY = process.env.NEXT_KEY

  try {
    const response: AxiosResponse<any> = await axios.get(`${BASE_URL}${type}/${id}?api_key=${KEY}&language=pt-br`);

    const { data } = response;

    return data;
  } catch (error) {

    console.log(error);

  }
};
