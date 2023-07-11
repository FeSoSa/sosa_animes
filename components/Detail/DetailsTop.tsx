import React, { useContext, useEffect, useState } from "react";
import { IAnimes } from "../../typing.d.ts";
import Stars from "../Home/banner/Stars";
import Genres from "../Home/banner/Genres";
import Image from "next/image.js";
import { banner } from "../../utils/apiVariables";
import ModalButton from "../Home/banner/ModalButton";
import FavoriteButton from "../Home/banner/FavoriteButton";
import { Context } from "../../contexts/ContextProvider";
import addToList from "../../utils/addToList";
import Modal from "../Home/banner/Modal";

interface Props {
  Anime: IAnimes;
}

export default function DetailsTop({ Anime }: Props) {
  const { favorite, setFavorite } = useContext(Context);

  useEffect(() => {
    // Atualiza os IDs dos gêneros quando os gêneros do anime são alterados
    if (Anime.genres) {
      getIDS();
    }
  }, [Anime.genres]);

  const [genreID, setGenreID] = useState<number[]>([]);

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

  return (
    <main className="p-10 bg-black bg-opacity-75">
      <span></span>
      <section className="flex flex-row">
        <div className="w-[50%] border-r-2 border-yellow flex flex-col gap-2">
          <div>
            <div>
              {/* Exibe o nome do anime ou título */}
              <span className="text-4xl pr-2">{Anime.name || Anime.title}</span>
              {Anime.name ? (
                <span className="text-[gray]">Série de TV</span>
              ) : (
                <span className="text-[gray]">Filme</span>
              )}
            </div>
            {/* Exibe o nome original do anime ou título original */}
            <h2 className="text-[gray]">
              {Anime.original_name || Anime.original_title}
            </h2>
          </div>
          <div className="flex-row flex gap-2">
            {/* Exibe as estrelas de avaliação */}
            <Stars stars={Anime.vote_average} />
            {/* Exibe os gêneros */}
            <Genres
              genres={genreID}
              mediaType={Anime.name ? "tv" : "movie"}
            />
          </div>
          {Anime.name && (
            <p>
              {/* Exibe o número de temporadas */}
              {Anime.number_of_seasons}{" "}
              {Anime.number_of_seasons && Anime.number_of_seasons > 1
                ? "Temporadas"
                : "Temporada"}
            </p>
          )}
          <p className="text-[gray]">
            {/* Exibe a data de lançamento */}
            Lançado em{" "}
            {Anime.name
              ? String(Anime.first_air_date).slice(0, 4)
              : String(Anime.release_date).slice(0, 4)}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              {/* Botão para abrir o modal de trailers */}
              <ModalButton TrailerID={Anime.id} color="yellow" text="white">
                Ver Trailers
              </ModalButton>
              {/* Botão de favoritos */}
              <FavoriteButton
                added={
                  favorite && favorite.some((i) => i.id === Anime.id)
                }
                // Função para adicionar o anime à lista de favoritos
                addToList={() => {
                  addToList({ Anime, favorite, setFavorite });
                }}
              />
            </div>
            {Anime.production_companies &&
              Anime.production_companies[0].logo_path && (
                <div className="bg-white rounded p-2 mr-10">
                  <Image
                    src={`${banner}${Anime.production_companies[0].logo_path}`}
                    alt={Anime.production_companies && Anime.production_companies[0].name ? Anime.production_companies[0].name : ""}
                    width={0} height={0} style={{ width: 125 }}
                  />
                </div>
              )
            }
          </div>
        </div>
        <div className="max-w-[50%] pl-5">
          {Anime.overview}
        </div>

      </section>

      <section className="flex justify-center pt-10 pb-2 ">

      </section>
      <Modal ID={Anime.id} name={Anime.name ? Anime.name : Anime.title} type={Anime.name ? 'tv' : 'movie'} />
    </main>
  );
}
