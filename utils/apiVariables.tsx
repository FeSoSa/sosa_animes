import dotenv from 'dotenv';
dotenv.config();

interface ApiVariables {
  base: {
    base_url: string;
    api_key: string | undefined;
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

const apiVariables: ApiVariables = {
  base: {
    base_url: "https://api.themoviedb.org/3/",
    api_key: process.env.IMDB_KEY,
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

export const banner = `${apiVariables.images.base_url}${apiVariables.images.backdrop_sizes[2]}/`;
export default apiVariables;
