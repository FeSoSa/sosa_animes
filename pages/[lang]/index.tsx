import React, { useContext, useEffect, useState } from "react";
import { IAnimes, IComponent } from "../../typing.d.ts";
import { GetServerSideProps } from "next";
import MainContainer from "../../components/Home/MainContainer";
import Head from "next/head";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../db/firebaseConfig";
import Loading from "../../components/Loading/Loading";
import { useRouter } from "next/router.js";
import { Context } from "../../contexts/ContextProvider";
import { BRrequests, ENGrequests } from "../../constants/requests";

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
  const { language, setLanguage, translation } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  const [animesData, setAnimesData] = useState({
    PopularAnime,
    ActionAnime,
    DramaAnime,
    ComedyAnime,
    FictionAnime,
    MisteryAnime,
    MovieAnime,
  });

  useEffect(() => {
    // Function to fetch data based on the current language
    const fetchData = async () => {
      try {
        const requests =
          language === "pt-br" ? BRrequests : ENGrequests;

        const [
          PopularAnime,
          ActionAnime,
          DramaAnime,
          ComedyAnime,
          FictionAnime,
          MisteryAnime,
          MovieAnime,
        ] = await Promise.all([
          axios.get(requests.fetchAll).then((res) => res.data),
          axios.get(requests.fetchAction).then((res) => res.data),
          axios.get(requests.fetchDrama).then((res) => res.data),
          axios.get(requests.fetchComedy).then((res) => res.data),
          axios.get(requests.fetchFiction).then((res) => res.data),
          axios.get(requests.fetchMistery).then((res) => res.data),
          axios.get(requests.fetchMovies).then((res) => res.data),
        ]);

        setAnimesData({
          PopularAnime: PopularAnime.results,
          ActionAnime: ActionAnime.results,
          DramaAnime: DramaAnime.results,
          ComedyAnime: ComedyAnime.results,
          FictionAnime: FictionAnime.results,
          MisteryAnime: MisteryAnime.results,
          MovieAnime: MovieAnime.results,
        });
      } catch (error) {
        // Handle errors if any
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch data when the component mounts and when the language changes
  }, [language]);

  const Animes: IComponent[] = [
    // Use the data from the state here
    [animesData.PopularAnime, translation.genres.trending],
    [animesData.ActionAnime, translation.genres.action],
    [animesData.DramaAnime, translation.genres.drama],
    [animesData.ComedyAnime, translation.genres.comedy],
    [animesData.FictionAnime, translation.genres.fiction],
    [animesData.MisteryAnime, translation.genres.mistery],
    [animesData.MovieAnime, translation.genres.movies],
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
      {loading&&!user || !loading&&!user || loading&&user
        ?<Loading/>
        :<MainContainer Animes={Animes} Banner={PopularAnime} />
      }
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
    axios.get(BRrequests.fetchAll).then((res) => res.data),
    axios.get(BRrequests.fetchAction).then((res) => res.data),
    axios.get(BRrequests.fetchDrama).then((res) => res.data),
    axios.get(BRrequests.fetchComedy).then((res) => res.data),
    axios.get(BRrequests.fetchFiction).then((res) => res.data),
    axios.get(BRrequests.fetchMistery).then((res) => res.data),
    axios.get(BRrequests.fetchMovies).then((res) => res.data)
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
