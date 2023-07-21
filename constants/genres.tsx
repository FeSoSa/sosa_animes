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

export const movieGenres:IDs = {
  0: { BRname: "Geral", ENGname: "Geral", id: 0, slug: "geral" },
  28: {
    BRname: "Ação",
    ENGname: "Action",
    id: 28,
    slug: "action",
  },
  12: {
    BRname: "Aventura",
    ENGname: "Adventure",
    id: 12,
    slug: "adventure",
  },
  16: {
    BRname: "Animação",
    ENGname: "Animation",
    id: 16,
    slug: "animation",
  },
  35: {
    BRname: "Comédia",
    ENGname: "Comedy",
    id: 35,
    slug: "comedy",
  },
  80: {
    BRname: "Crime",
    ENGname: "Crime",
    id: 80,
    slug: "crime",
  },
  90: {
    BRname: "Documentário",
    ENGname: "Documentary",
    id: 90,
    slug: "documentary",
  },
  18: {
    BRname: "Drama",
    ENGname: "Drama",
    id: 18,
    slug: "drama",
  },
  10751: {
    BRname: "Família",
    ENGname: "Family",
    id: 10751,
    slug: "family",
  },
  14: {
    BRname: "Fantasia",
    ENGname: "Fantasy",
    id: 14,
    slug: "fantasy",
  },
  36: {
    BRname: "História",
    ENGname: "History",
    id: 36,
    slug: "history",
  },
  27: {
    BRname: "Terror",
    ENGname: "Horror",
    id: 27,
    slug: "horror",
  },
  10402: {
    BRname: "Musical",
    ENGname: "Musical",
    id: 10402,
    slug: "musical",
  },
  9648: {
    BRname: "Mistério",
    ENGname: "Mystery",
    id: 9648,
    slug: "mystery",
  },
  10749: {
    BRname: "Romantico",
    ENGname: "Romance",
    id: 10749,
    slug: "romance",
  },
  878: {
    BRname: "Ficção científica",
    ENGname: "Science Fiction",
    id: 878,
    slug: "science-fiction",
  },
  10770: {
    BRname: "Cinema",
    ENGname: "Cinema",
    id: 10770,
    slug: "cinema",
  },
  53: {
    BRname: "Thriller",
    ENGname: "Thriller",
    id: 53,
    slug: "thriller",
  },
  10752: {
    BRname: "Guerra",
    ENGname: "War",
    id: 10752,
    slug: "war",
  },
  37: {
    BRname: "Faroeste",
    ENGname: "Western",
    id: 37,
    slug: "western",
  },
};

export const tvGenres:IDs = {
  0: { BRname: "Geral", ENGname: "Geral", id: 0, slug: "geral" },
  10759: {
    BRname: "Ação & Aventura",
    ENGname: "Action & Adventure",
    id: 10759,
    slug: "action-and-adventure",
  },
  16: {
    BRname: "Animação",
    ENGname: "Animation",
    id: 16,
    slug: "animation",
  },
  35: {
    BRname: "Comédia",
    ENGname: "Comedy",
    id: 35,
    slug: "comedy",
  },
  80: {
    BRname: "Crime",
    ENGname: "Crime",
    id: 80,
    slug: "crime",
  },
  99: {
    BRname: "Documentário",
    ENGname: "Documentary",
    id: 99,
    slug: "documentary",
  },
  18: {
    BRname: "Drama",
    ENGname: "Drama",
    id: 18,
    slug: "drama",
  },
  10751: {
    BRname: "Família",
    ENGname: "Family",
    id: 10751,
    slug: "family",
  },
  10762: {
    BRname: "Kids",
    ENGname: "Kids",
    id: 10762,
    slug: "kids",
  },
  9648: {
    BRname: "Mistério",
    ENGname: "Mystery",
    id: 9648,
    slug: "mystery",
  },
  10763: {
    BRname: "Notícias",
    ENGname: "News",
    id: 10763,
    slug: "news",
  },
  10764: {
    BRname: "Reality",
    ENGname: "Reality",
    id: 10764,
    slug: "reality",
  },
  10765: {
    BRname: "Ficção Científica",
    ENGname: "Science Fiction",
    id: 10765,
    slug: "science-fiction",
  },
  10766: {
    BRname: "Novela",
    ENGname: "Soap",
    id: 10766,
    slug: "soap",
  },
  10767: {
    BRname: "Conversa",
    ENGname: "Talk",
    id: 10767,
    slug: "talk",
  },
  10768: {
    BRname: "Guerra & Política",
    ENGname: "War & Politics",
    id: 10768,
    slug: "war-and-politics",
  },
  37: {
    BRname: "Faroeste",
    ENGname: "Western",
    id: 37,
    slug: "western",
  },
};


export default genres