import React from "react";
import apiVariables from "./apiVariables";
import axios, { Axios, AxiosResponse } from "axios";

export default async function getExplore(type: 'tv' | 'movie', genre = 0, sort: string, page: number, lang:string, search: string) {

    const API_KEY = process.env.TMDB_KEY
    const BASE_URL = apiVariables.base.base_url
    const NETWORKS = apiVariables.base.networks
    const COMPANIES = apiVariables.base.companies

    if (type) {
        try {
            if (search.length>1) {
                const response: AxiosResponse<any> = await axios.get(`${BASE_URL}search/${type}?api_key=${API_KEY}&query=${search}&include_adult=false&language=${lang}&page=${page}&region=BR&with_genres=16`)

                const { data } = response

                return data
            } else {
                const response: AxiosResponse<any> = await axios.get(`${BASE_URL}discover/${type}?api_key=${API_KEY}&sort_by=${sort}&language=${lang}&region=BR&with_genres=16${genre === 0 ? '' : `,${genre}`}&${type === 'tv' ? NETWORKS : COMPANIES}&page=${page}`)

                const { data } = response
                return data
            }
        } catch (error) {
            console.log(error)
        }
    }
}
