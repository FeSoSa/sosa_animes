import React, { useContext, useEffect, useState } from "react";
import { AnimeEmpty, IAnimes } from "../../../typing.d.ts";
import { banner } from "../../../utils/apiVariables";
import NotFound from "../../../public/assets/NotFound.png";
import { Context } from "../../../contexts/ContextProvider";
import BannerInfo from "./BannerInfo";
import Image from "next/image.js";

import Icon from '../../../public/assets/AnimeIcon.png'

interface Props {
  Banner: IAnimes[];
}

export default function BannerHome({ Banner }: Props) {
  // Estado para armazenar o destaque do banner
  const [destaque, setDestaque] = useState<string>();
  // Estado para armazenar as informações do anime em destaque
  const [info, setInfo] = useState<IAnimes>(AnimeEmpty);
  // Contexto para acessar o anime selecionado
  const { selectedAnime, setSelectedAnime } = useContext(Context);

  useEffect(() => {
    // Função para gerar um número aleatório para o índice do banner
    function random() {
      const random = Math.random() * Banner.length;
      const rand = Math.floor(random);
      return rand;
    }

    if (!selectedAnime) {
      // Se não houver anime selecionado, escolhe um aleatório do banner
      const rand = random();
      setDestaque(`url(${banner}${Banner[rand].backdrop_path})`);
      setInfo(Banner[rand]);
    } else {
      if (!selectedAnime.backdrop_path) {
        // Se o anime selecionado não tiver um backdrop_path, utiliza a imagem NotFound
        setDestaque(`url(${NotFound.src})`);
        setInfo(selectedAnime);
      } else {
        // Caso contrário, utiliza o backdrop_path do anime selecionado
        setDestaque(`url(${banner}${selectedAnime.backdrop_path})`);
        setInfo(selectedAnime);
      }
    }
  }, [Banner, selectedAnime, setSelectedAnime]);

  return (
    <>
      <header
        className="bg-cover bg-center h-[100vh]"
        id="banner"
        style={{
          backgroundImage: destaque,
          transition: "background-image 300ms ease-in-out",
        }}
      >
        <div className="bg-black bg-opacity-25 h-full">
          <div className="gradient-v">
            <div className="gradient-h">
              <BannerInfo Anime={info} />
            </div>
          </div>
        </div>
        <Image src={Icon} width={0} height={0} alt="Icon SosaAnime"
        className="absolute top-0 z-99 right-0 m-2 w-[75px] max-md:w-[50px]"
        />
      </header>
    </>
  );
}
