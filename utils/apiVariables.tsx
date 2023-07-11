import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

interface ApiVariables {
  base: {
    base_url: string;
    api_key: string | undefined;
    providers:string;
    networks:string;
    companies:string
  };
  images: {
    base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
}

export const getSecret = async () => {
  const fetch = axios.create({ baseURL: "/" });
  const { data } = await fetch("api/requestSecret");
  return data;
};

const apiVariables: ApiVariables = {
  base: {
    base_url: "https://api.themoviedb.org/3/",
    api_key: process.env.NEXT_KEY,
    providers: "&watch_region=BR&with_watch_providers=283|1796|619|384",
    networks: "&with_networks=1175|614|1112|159|98|1521|1|94|160|201|861|173",
    companies: "&with_companies=3756|2073|2883|882|21444|2918|5542|155586|2849|10342|5438|6683"

  },
  images: {
    base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: ["w300", "w780", "w1280", "original"],
    logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    profile_sizes: ["w45", "w185", "h632", "original"],
    still_sizes: ["w92", "w185", "w300", "original"],
  },
};

export const banner = `${apiVariables.images.base_url}${apiVariables.images.backdrop_sizes[3]}/`;
export default apiVariables;
