import React, { useContext, useEffect, useState } from "react";
import { IAnimes } from "../../typing.d.ts";
import Stars from "../Home/banner/Stars";
import Genres from "../Home/banner/Genres";
import Image from "next/image.js";
import { banner } from "../../utils/apiVariables";
import ModalButton from "../Home/banner/ModalButton";
import FavoriteButton from "../Home/banner/FavoriteButton";
import { Context } from "../../contexts/ContextProvider";
import Modal from "../Home/banner/Modal";
import { FavoriteClick, getList } from "../../db/Controller";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../db/firebaseConfig";

interface Props {
  Anime: IAnimes;
}

export default function DetailsTop({ Anime }: Props) {
  const { favorite, setFavorite, translation, language } = useContext(Context);
  const [user] = useAuthState(auth)
  const [genreID, setGenreID] = useState<number[]>([]);
  const [clickFavorite, setClickFavorite] = useState(false)

  const getIDS = () => {
    Anime.genres?.forEach((genre) => {
      setGenreID((prevGenreID) => {
        if (!prevGenreID.includes(genre.id)) {
          return [...prevGenreID, genre.id];
        }
        return prevGenreID;
      });
    });
  };

  const getFavorites = async () => {
    if (user) {
      const data = await getList(user);
      setFavorite(data);
    }
  };

  useEffect(() => {
    // Atualiza os IDs dos gêneros quando os gêneros do anime são alterados
    if (Anime.genres) {
      getIDS();
    }
  }, [Anime.genres]);

  useEffect(() => {
    getFavorites();
  }, [user, clickFavorite]);

  return (
    <main className="p-10 bg-black bg-opacity-75">
      <span></span>
      <section className="flex flex-row max-md:flex-col">
        <div className="w-[50%] border-r-2 border-yellow flex flex-col gap-2
          max-md:border-none max-md:w-[100%] max-md:gap-3 max-md:items-center
        ">
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <div >
              {/* Exibe o nome do anime ou título */}
              <span className="text-4xl pr-2">{Anime.name || Anime.title}</span>
              {Anime.name ? (
                <span className="text-[gray]">{translation.geral.TvType}</span>
              ) : (
                <span className="text-[gray]">{translation.geral.MovieType}</span>
              )}
            </div>
            {/* Exibe o nome original do anime ou título original */}
            <h2 className="text-[gray]">
              {Anime.original_name || Anime.original_title}
            </h2>
          </div>
          <div className="flex-row flex gap-2 
            max-md:items-center max-md:gap-10
          ">
            {/* Exibe as estrelas de avaliação */}
            <Stars stars={Anime.vote_average} />
            {/* Exibe os gêneros */}
            <Genres
              lang={language}
              genres={genreID}
              mediaType={Anime.name ? "tv" : "movie"}
            />
          </div>
          {Anime.name && (
            <p>
              {/* Exibe o número de temporadas */}
              {Anime.number_of_seasons}{" "}
              {Anime.number_of_seasons && Anime.number_of_seasons > 1
                ? `${translation.geral.season}s`
                : translation.geral.season}
            </p>
          )}
          <p className="text-[gray]">
            {/* Exibe a data de lançamento */}
            {`${translation.geral.release} `}
            {Anime.name
              ? String(Anime.first_air_date).slice(0, 4)
              : String(Anime.release_date).slice(0, 4)}
          </p>
          <div className="flex justify-between items-center max-md:gap-5">
            <div className="flex gap-5">
              {/* Botão para abrir o modal de trailers */}
              <ModalButton TrailerID={Anime.id} color="yellow" text="white">
                {translation.geral.trailer}
              </ModalButton>
              {/* Botão de favoritos */}

              <div onClick={() => setClickFavorite(!clickFavorite)}>

                <FavoriteButton
                  added={favorite && favorite.some((i) => i.id === Anime.id)}
                  addToList={() => { user && FavoriteClick({ Anime, user }) }}
                />
              </div>

            </div>
            {Anime.production_companies &&
              Anime.production_companies[0].logo_path && (
                <div className="bg-white rounded p-2 mr-10 max-md:mr-0">
                  <Image
                    src={`${banner}${Anime.production_companies[0].logo_path}`}
                    alt={Anime.production_companies && Anime.production_companies[0].name ? Anime.production_companies[0].name : ""}
                    width={0} height={0}
                    className="w-[125px] "
                  />
                </div>
              )
            }
          </div>
        </div>
        <div className="w-[50%] pl-5 max-md:w-[100%] max-md:text-center max-md:pt-5">
          {Anime.overview}
        </div>

      </section>


      <Modal ID={Anime.id} name={Anime.name ? Anime.name : Anime.title} type={Anime.name ? 'tv' : 'movie'} />
    </main>
  );
}
