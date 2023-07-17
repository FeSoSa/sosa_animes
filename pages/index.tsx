import React, { useEffect } from "react";
import { IAnimes, IComponent } from "../typing.d.ts";
import { GetServerSideProps } from "next";
import MainContainer from "../components/Home/MainContainer";
import Head from "next/head";
import axios from "axios";
import requests from "../constants/requests";

interface Props {
  PopularAnime: IAnimes[];
  ActionAnime: IAnimes[];
  DramaAnime: IAnimes[];
  ComedyAnime: IAnimes[];
  FictionAnime: IAnimes[];
  MisteryAnime: IAnimes[];
  MovieAnime: IAnimes[];
}

const Home = ({
  PopularAnime,
  ActionAnime,
  DramaAnime,
  ComedyAnime,
  FictionAnime,
  MisteryAnime,
  MovieAnime
}: Props) => {
  const Animes: IComponent[] = [
    [PopularAnime, "Em destaque"],
    [ActionAnime, "Ação e Aventura"],
    [DramaAnime, "Drama"],
    [ComedyAnime, "Comédia"],
    [FictionAnime, 'Ficção'],
    [MisteryAnime, "Mistério"],
    [MovieAnime, "Filmes"]
  ];

  return (
    <>
      <Head>
        <title>SoSaAnime</title>
        <meta
          name="description"
          content="SoSaAnime"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer Animes={Animes} Banner={PopularAnime} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (content) => {
  const [
    PopularAnime,
    ActionAnime,
    DramaAnime,
    ComedyAnime,
    FictionAnime,
    MisteryAnime,
    MovieAnime
  ] = await Promise.all([
    axios.get(requests.fetchAll).then((res) => res.data),
    axios.get(requests.fetchAction).then((res) => res.data),
    axios.get(requests.fetchDrama).then((res) => res.data),
    axios.get(requests.fetchComedy).then((res) => res.data),
    axios.get(requests.fetchFiction).then((res) => res.data),
    axios.get(requests.fetchMistery).then((res) => res.data),
    axios.get(requests.fetchMovies).then((res) => res.data)
  ]);

  return {
    props: {
      PopularAnime: PopularAnime.results,
      ActionAnime: ActionAnime.results,
      DramaAnime: DramaAnime.results,
      ComedyAnime: ComedyAnime.results,
      FictionAnime: FictionAnime.results,
      MisteryAnime: MisteryAnime.results,
      MovieAnime: MovieAnime.results
    }
  };
};
