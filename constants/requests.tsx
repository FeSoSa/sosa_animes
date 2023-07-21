import apiVariables from "../utils/apiVariables"

const API_KEY = process.env.TMDB_KEY
const API_BASE = apiVariables.base.base_url
const PROVIDERS = apiVariables.base.providers
const NETWORKS = apiVariables.base.networks
const COMPANIES = apiVariables.base.companies

const date= new Date()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDay()

const AIR_DATE = `air_date.gte=${year}-${month < 10 ? '0'+month : month}-06&air_date.lte=${year}-${month < 10 ? '0'+(month+1) : month+1}-06`

const BRrequests = {
    fetchAll:`${API_BASE}discover/tv?api_key=${API_KEY}&language=pt-BR&region=BR&&include_image_language=pt
        &include_video=true&page=1&sort_by=popularity.desc&with_genres=16${NETWORKS}&${AIR_DATE}&page=1`,

    fetchAction:`${API_BASE}discover/tv?api_key=${API_KEY}&language=pt-BR&region=BR&include_image_language=pt
        &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,10759${NETWORKS}&page=1`,

    fetchDrama:`${API_BASE}discover/tv?api_key=${API_KEY}&language=pt-BR&region=BR&&include_image_language=pt
        &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,18${NETWORKS}&page=1`,

    fetchComedy:`${API_BASE}discover/tv?api_key=${API_KEY}&language=pt-BR&region=BR&&include_image_language=pt
    &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,35${NETWORKS}&page=1`,

    fetchFiction:`${API_BASE}discover/tv?api_key=${API_KEY}&language=pt-BR&region=BR&&include_image_language=pt
    &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,10765${NETWORKS}&page=1`,

    fetchMistery:`${API_BASE}discover/tv?api_key=${API_KEY}&language=pt-BR&region=BR&&include_image_language=pt
    &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,9648${NETWORKS}&page=1`,

    fetchMovies:`${API_BASE}discover/movie?api_key=${API_KEY}&language=pt-BR&region=BR&&include_image_language=pt
    &include_video=true&page=1&sort_by=popularity.desc&with_genres=16${COMPANIES}&page=1`,
}
const ENGrequests = {
    fetchAll:`${API_BASE}discover/tv?api_key=${API_KEY}&language=en-US&region=BR&&include_image_language=en
        &include_video=true&page=1&sort_by=popularity.desc&with_genres=16${NETWORKS}&${AIR_DATE}&page=1`,

    fetchAction:`${API_BASE}discover/tv?api_key=${API_KEY}&language=en-US&region=BR&include_image_language=en
        &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,10759${NETWORKS}&page=1`,

    fetchDrama:`${API_BASE}discover/tv?api_key=${API_KEY}&language=en-US&region=BR&&include_image_language=en
        &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,18${NETWORKS}&page=1`,

    fetchComedy:`${API_BASE}discover/tv?api_key=${API_KEY}&language=en-US&region=BR&&include_image_language=en
    &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,35${NETWORKS}&page=1`,

    fetchFiction:`${API_BASE}discover/tv?api_key=${API_KEY}&language=en-US&region=BR&&include_image_language=en
    &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,10765${NETWORKS}&page=1`,

    fetchMistery:`${API_BASE}discover/tv?api_key=${API_KEY}&language=en-US&region=BR&&include_image_language=en
    &include_video=true&page=1&sort_by=popularity.desc&with_genres=16,9648${NETWORKS}&page=1`,

    fetchMovies:`${API_BASE}discover/movie?api_key=${API_KEY}&language=en-US&region=BR&&include_image_language=en
    &include_video=true&page=1&sort_by=popularity.desc&with_genres=16${COMPANIES}&page=1`,
}

export {BRrequests,ENGrequests}
