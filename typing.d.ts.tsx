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
    genres?: Igenres[]
    production_companies?: IPCompany[]
    number_of_seasons?: number
}

export interface IDetails {
    adult: boolean
    backdrop_path: string
    created_by: []
    episode_run_time: number[]
    first_air_date: Date | string
    homepage: string
    id: number
    in_production: boolean
    languages: string[]
    last_air_date: Date | string
    last_episode_to_air:LastEpisode
    name: string
    title:string
    networks:Networks[]
    next_episode_to_air: null
    number_of_episodes: number
    origin_country: string[]
    original_language: string
    original_name: string
    original_title:string
    overview: string
    popularity: number
    poster_path: string
    production_countries:IPContries[]
    seasons:ISeasons
    spoken_languages:SpokenLang
    status: string
    tagline: string
    type: string
    vote_average: number
    vote_count: number
    genres: Igenres[]
    production_companies?: IPCompany[]
    number_of_seasons: number
}

export interface SpokenLang{
    english_name:string 
    iso_639_1:string
    name:string
}

export interface ISeasons{
    air_date:Date | string 
    episode_count:number 
    id:number 
    name:string 
    overview:string
    poster_path:null
    season_number:number
    vote_average:number
}

export interface IPContries{
    iso_3166_1:string 
    name:string 
}

export interface Networks{
    id:number 
    logo_path:string 
    name:string 
    origin_country:string 
}

export interface LastEpisode {
    air_date:Date | number
    episode_number:number
    id:number
    name:string
    overview:string
    production_code:string
    runtime:number
    season_number:number
    show_id:number
    still_path:string
    vote_average:number
    vote_count:number
}

export interface IPCompany {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}
export interface Igenres {
    id: number,
    name: string
}

export interface IComponent {
    [0]: IAnimes[],
    [1]: string
}

export interface IContext {
    selectedAnime: IAnimes | undefined;
    setSelectedAnime: Dispatch<SetStateAction<IAnimes | undefined>>
    navToggle: boolean;
    setNavToggle: Dispatch<SetStateAction<boolean>>;
    navBlack: boolean
    setNavBlack: Dispatch<SetStateAction<boolean>>;
    favorite: Array<IAnimes>,
    setFavorite: Dispatch<SetStateAction<IAnimes[]>>
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

export interface ISort{
    value:string,
    label:string
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

export const AnimeEmpty: IAnimes = {
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