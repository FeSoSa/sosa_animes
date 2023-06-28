import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../contexts/ContextProvider";
import { getTrailers } from "../../../utils/getTrailers";
import { IVideo } from "../../../typing.d.ts";
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { IoCloseSharp } from 'react-icons/io5';

// Define a interface Props com os tipos de propriedades esperadas
interface Props {
  ID: number;
  type: string;
  name: string;
}

// Componente Modal
export default function Modal({ ID, type, name }: Props) {


  // Obtém o valor de openModal e setOpenModal do contexto
  const { openModal, setOpenModal } = useContext(Context);

  // Define o estado para typeMedia e selectedTrailer
  const [typeMedia, setTypeMedia] = useState<'tv' | 'movie'>('tv');
  const [selectedTrailer, setSelectedTrailer] = useState<IVideo[]>([]);

  // Define o estado selectNum e inicializa com o comprimento da array selectedTrailer - 1
  const [selectNum, setSelectNum] = useState(0);

  // Define o efeito colateral para atualizar typeMedia quando o valor de type muda
  useEffect(() => {
    setTypeMedia(type ? 'movie' : 'tv');
  }, [type]);

  // Define o efeito colateral para buscar vídeos quando o ID ou typeMedia muda
  useEffect(() => {
    if (ID !== undefined) {
      getVideos();
    }
  }, [ID, typeMedia]);

  // Efeito colateral para atualizar selectNum quando selectedTrailer é alterado
  useEffect(() => {
    if (selectedTrailer.length > 0) {
      setSelectNum(selectedTrailer.length - 1);
    }
  }, [selectedTrailer]);

  // Função assíncrona para buscar vídeos
  async function getVideos() {
    try {
      const response = await getTrailers(ID, typeMedia);
      
      if (response && response.results && response.results.length > 0) {
        const { results } = response;
        setSelectedTrailer(results);
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  // Função para fechar o modal e redefinir o selectNum para o valor inicial
  const closeModal = () => {
    setOpenModal(false);
    setSelectNum(selectedTrailer.length - 1);
  };

  // Função para avançar para o próximo trailer
  const nextTrailer = () => {
    setSelectNum(selectNum - 1);
  };

  // Função para voltar para o trailer anterior
  const previousTrailer = () => {
    setSelectNum(selectNum + 1);
  };
  return (
    <>
      {openModal && (
        <section className="bg-black fixed top-0 bottom-0 left-0 right-0 bg-opacity-75 z-[98]">
          <section className="flex fixed justify-center items-center top-0 left-0 bottom-0 right-0 ">
            <div className="w-[840px] h-[560px] bg-dark_gray border-2 border-yellow bg-opacity-[80%] flex flex-col rounded-b-2xl rounded-t-md">
              {/* Cabeçalho */}
              <header className="bg-yellow w-[836px] h-[3rem] mb-16 justify-between flex items-center p-2 text-md font-bold">
                <p>{name}</p>
                <IoCloseSharp style={{ fontSize: 30 }} className="cursor-pointer text-white hover:text-red " onClick={() => closeModal()} />
              </header>

              {/* Conteúdo do modal */}
              <div className="flex items-center justify-around">
                {
                  selectNum !== selectedTrailer.length - 1
                    ? <SlArrowLeft onClick={() => previousTrailer()} style={{ fontSize: 40 }} className="cursor-pointer hover:text-yellow" />
                    : <SlArrowLeft style={{ fontSize: 40 }} className="opacity-0" />
                }
                {/* Renderiza o vídeo selecionado */}
                {selectedTrailer && (
                  <iframe
                    id="modal-video"
                    className="w-[640px] h-[360px] rounded"
                    src={`https://www.youtube.com/embed/${selectedTrailer[selectNum].key}`}
                    title={selectedTrailer[selectNum].type}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
                {
                  selectNum !== 0
                    ? <SlArrowRight onClick={() => nextTrailer()} style={{ fontSize: 40 }} className="cursor-pointer hover:text-yellow" />
                    : <SlArrowRight style={{ fontSize: 40 }} className="opacity-0" />
                }
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  )
}