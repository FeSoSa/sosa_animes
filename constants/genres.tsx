import { IDs, IGenres } from "../typing.d.ts";

const genres: IGenres = {
    geral: {
      name: "Geral", id: 0,
      
    },
    romantico: {
      name: "Romantico", id: 10749,
      
    },
    terror: {
      name: "Terror", id: 27,
      
    },
    historia: {
      name: "História", id: 36,
      
    },
    fantasia: {
      name: "Fantasia",
      id: 14,
      
    },
    aventura: {
      name: "Aventura",
      id: 12,
      
    },
    acao: {
      name: "Ação", id: 28,
      
    },
    "acao-e-aventura": { name: "Ação & Aventura", id: 10759, movie:0 },
    animacao: {
      name: "Animação", id: 16,
      
    },
    comedia: {
      name: "Comédia", id: 35,
      
    },
    drama: {
      name: "Drama", id: 18,
      
    },
    misterio: {
      name: "Mistério",
      id: 9648,
      
    },
    "ficcao-cientifica": {
        name: "Ficção Científica",
        id: 10765,
        movie:878
    },
    guerra: {
      name: "Guerra",
      id: 10752,
      
    },
    "guerra-e-politica": {
        name: "Guerra & Política",
        id: 10768,
    },
};

export const movieGenres: IDs = {
    0: { name: "Geral", id: 0, slug: "geral" },
    28: {
      name: "Ação",
      id: 28,
      slug: "acao",
    },
    12: {
      name: "Aventura",
      id: 12,
      slug: "aventura",
    },
    16: {
      name: "Animação",
      id: 16,
      slug: "animacao",
    },
    35: {
      name: "Comédia",
      id: 35,
      slug: "comedia",
    },
    80: {
      name: "Crime",
      id: 80,
      slug: "crime",
    },
    90: {
      name: "Documentário",
      id: 90,
      slug: "documentario",
    },
    18: {
      name: "Drama",
      id: 18,
      slug: "drama",
    },
    10751: {
      name: "Família",
      id: 10751,
      slug: "familia",
    },
    14: {
      name: "Fantasia",
      id: 14,
      slug: "fantasia",
    },
    36: {
      name: "História",
      id: 36,
      slug: "historia",
    },
    27: {
      name: "Terror",
      id: 27,
      slug: "terror",
    },
    10402: {
      name: "Musical",
      id: 10402,
      slug: "musical",
    },
    9648: {
      name: "Mistério",
      id: 9648,
      slug: "misterio",
    },
    10749: {
      name: "Romantico",
      id: 10749,
      slug: "romantico",
    },
    878: {
      name: "Ficção científica",
      id: 878,
      slug: "ficcao-cientifica",
    },
    10770: {
      name: "Cinema",
      id: 10770,
      slug: "cinema",
    },
    53: {
      name: "Thriller",
      id: 53,
      slug: "thriller",
    },
    10752: {
      name: "Guerra",
      id: 10752,
      slug: "guerra",
    },
    37: {
      name: "Faroeste",
      id: 37,
      slug: "faroeste",
    },
  };
export const tvGenres: IDs = {
    0: { name: "Geral", id: 0, slug: "geral" },
    10759: {
      name: "Ação & Aventura",
      id: 10759,
      slug: "acao-e-aventura",
    },
    16: {
      name: "Animação",
      id: 16,
      slug: "animacao",
    },
    35: {
      name: "Comédia",
      id: 35,
      slug: "comedia",
    },
    80: {
      name: "Crime",
      id: 80,
      slug: "crime",
    },
    99: {
      name: "Documentário",
      id: 99,
      slug: "documentario",
    },
    18: {
      name: "Drama",
      id: 18,
      slug: "drama",
    },
    10751: {
      name: "Família",
      id: 10751,
      slug: "familia",
    },
    10762: {
      name: "Kids",
      id: 10762,
      slug: "kids",
    },
    9648: {
      name: "Mistério",
      id: 9648,
      slug: "misterio",
    },
    10763: {
      name: "Notícias",
      id: 10763,
      slug: "noticias",
    },
    10764: {
      name: "Reality",
      id: 10764,
      slug: "reality",
    },
    10765: {
      name: "Ficção Científica",
      id: 10765,
      slug: "ficcao-cientifica",
    },
    10766: {
      name: "Novela",
      id: 10766,
      slug: "novela",
    },
    10767: {
      name: "Conversa",
      id: 10767,
      slug: "conversa",
    },
    10768: {
      name: "Guerra & Política",
      id: 10768,
      slug: "guerra-e-politica",
    },
    37: {
      name: "Faroeste",
      id: 37,
      slug: "faroeste",
    },
  };

export default genres