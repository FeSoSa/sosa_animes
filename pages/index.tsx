
import requests from "../constants/requests";
import React, { useEffect } from "react";
import { IAnimes, IComponent } from "../typing.d.ts";
import { GetServerSideProps } from "next";
import MainContainer from "../components/Home/MainContainer";
import Head from "next/head";
import Cookies from "universal-cookie";

interface Props{
    PopularAnime:IAnimes[],
    ActionAnime:IAnimes[],
    DramaAnime:IAnimes[],
    ComedyAnime:IAnimes[],
    FictionAnime:IAnimes[],
    MisteryAnime:IAnimes[],
    MovieAnime:IAnimes[]
}

const Home = ({
    PopularAnime,
    ActionAnime,
    DramaAnime,
    ComedyAnime,
    FictionAnime,
    MisteryAnime,
    MovieAnime
}:Props) => {

    const cookies = new Cookies();
    cookies.set('Modal','', {secure: true, sameSite: 'none'});
    cookies.set('Modal','', {secure: true, sameSite: 'lax'});


    const Animes:IComponent[] = [
        [PopularAnime,"Em destaque"],
        [ActionAnime,"Ação e Aventura"],
        [DramaAnime,"Drama"],
        [ComedyAnime,"Comédia"],
        [FictionAnime,'Ficção'],
        [MisteryAnime,"Mistério"],
        [MovieAnime,"Filmes"]
    ]


    return (
        <>
            <Head>
                <title>SoSaAnime</title>
                <meta
                    name="description"
                    content="SoSaAnime - Informações de Animes"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <MainContainer Animes={Animes} Banner={PopularAnime}/>
        </>
    )
}

export default Home

export const getServerSideProps:GetServerSideProps = async (content) => {
    const [
        PopularAnime,
        ActionAnime,
        DramaAnime,
        ComedyAnime,
        FictionAnime,
        MisteryAnime,
        MovieAnime
    ] = await Promise.all([
        fetch(requests.fetchAll).then((res) => res.json()),
        fetch(requests.fetchAction).then((res) => res.json()),
        fetch(requests.fetchDrama).then((res) => res.json()),
        fetch(requests.fetchComedy).then((res) => res.json()),
        fetch(requests.fetchFiction).then((res) => res.json()),
        fetch(requests.fetchMistery).then((res) => res.json()),
        fetch(requests.fetchMovies).then((res) => res.json())
    ])
    return{
        props:{
            PopularAnime:PopularAnime.results,
            ActionAnime:ActionAnime.results,
            DramaAnime:DramaAnime.results,
            ComedyAnime:ComedyAnime.results,
            FictionAnime:FictionAnime.results,
            MisteryAnime:MisteryAnime.results,
            MovieAnime:MovieAnime.results
        }
    }
}