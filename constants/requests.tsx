const API_KEY = process.env.NEXT_KEY
const API_BASE = 'https://api.themoviedb.org/3/'
const PROVIDERS = '&watch_region=BR&with_watch_providers=283|1796|619|384'
const NETWORKS = '&with_networks=1175|614|1112|159|98|1521|1|94|160|201|861|173'
const COMPANIES = '&with_companies=3756|2073|2883|882|21444|2918|5542|155586|2849|10342|5438|6683'

const date= new Date()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDay()

const AIR_DATE = `air_date.gte=${year}-${month < 10 ? '0'+month : month}-06&air_date.lte=${year}-${month < 10 ? '0'+(month+1) : month+1}-06`

const requests = {
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

export default requests
