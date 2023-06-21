import { Dispatch, SetStateAction } from "react";

export interface IAnimes {
    adult: boolean;
    backdrop_path: string | null;
    poster_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    release_date: string;
    title: string;
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    media_type?: string;
    trailer?: IVideo[];
    profile_path?: string | null;
    first_air_date?: Date | string;
    origin_country?: string[];
    original_name?: string;
    index?: number;
}

export interface IComponent{
    [0]:IAnimes[],
    [1]:string
}

export interface IContext{
    selectedAnime: IAnimes | undefined;
    setSelectedAnime: Dispatch<SetStateAction<IAnimes | undefined>> 
    navOpen:boolean;
    setNavOpen:Dispatch<SetStateAction<boolean>>;
    navBlack:boolean
    setNavBlack:Dispatch<SetStateAction<boolean>>;
    favorite:Array<IAnimes>,
    setFavorite:Dispatch<SetStateAction<IAnimes[]>>
}

export interface IVideo {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at?: string | Date;
    id: number;
  }

export interface IGenres {
    [key: string | number]: {
        name: string,
        id: number
    }
}

export const AnimeEmpty:IAnimes = {
    adult: false,
    backdrop_path: '',
    poster_path: '',
    genre_ids: [0],
    id: 0,
    original_language: 'string',
    original_title: 'string',
    overview: '',
    popularity: 0,
    release_date: '',
    title: '',
    name: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
}

export interface IDs {
    [key: string | number]: {
      name: string;
      id: number;
      slug: string;
    };
  }