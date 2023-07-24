import React, { useContext, useEffect, useState } from "react";
import { IAnimes } from "../../../typing.d.ts";
import Stars from "./Stars";
import Genres from "./Genres";
import Button from "./Button";
import { Context } from "../../../contexts/ContextProvider";
import FavoriteButton from "./FavoriteButton";
import ModalButton from "./ModalButton";
import Modal from "./Modal";
import DetailButton from "./DetailButton";
import { Translations } from "../../../constants/Translations";
import { FavoriteClick, getList } from "../../../db/Controller";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../db/firebaseConfig";

interface Props {
    Anime: IAnimes
}

export default function BannerInfo({ Anime }: Props) {

    const [user] = useAuthState(auth)
    const { favorite, setFavorite, language, translation } = useContext(Context)
    const [clickFavorite, setClickFavorite] = useState(false)

    const getFavorites = async () => {
        if (user) {
            const data = await getList(user);
            setFavorite(data);
        }
    };

    useEffect(() => {
        getFavorites();
    }, [user, clickFavorite]);

    return (
        <section>
            <div className="
            flex items-center text-[40px] font-bold pt-[50px] mb-5 px-[50px] w-[750px] 
            max-md:w-[390px] max-md:px-[20px] max-md:text-center max-md:text-[35px] max-md:mb-0 
            ">
                {Anime?.name?.length < 35 || Anime?.title?.length < 35
                    ? Anime?.name == null || undefined
                        ? <h2>{Anime?.title}</h2>
                        : <h2>{Anime?.name}</h2>
                    : Anime?.name == null || undefined
                        ? <h2>{Anime?.title?.slice(0, 60)}</h2>
                        : <h2>{Anime?.name?.slice(0, 60)}</h2>
                }
            </div>

            <div className="
            px-[55px] pb-[45px] 
            max-md:w-[390px] max-md:px-[20px] max-md:pt-2
            ">
                <div className="flex flex-row gap-2
                max-md:flex-col max-md:items-center
                ">
                    <Stars stars={Anime.vote_average} /> <Genres genres={Anime.genre_ids} mediaType={Anime.name ? 'tv' : 'movie'} lang={language} />
                </div>
                <div className="
                h-[120px] w-[600px] overflow-hidden mt-[15px]
                max-md:w-[350px] max-md:text-center max-md:h-[170px] max-md:mb-[15px]
                ">
                    {Anime.overview.length > 300
                        ? Anime.overview.slice(0, 300) + '...'
                        : Anime.overview
                    }
                </div>
                <div className="flex gap-5 max-md:gap-3 max-md:justify-center items-center">
                    <div>
                        <ModalButton TrailerID={Anime.id} color='yellow' text='white'>{translation.geral.trailer}</ModalButton>
                    </div>
                    <div>
                        <DetailButton type={Anime.title ? 'movie' : 'tv'} id={Anime.id} color='black' text="white">{translation.geral.details}</DetailButton>
                    </div>

                    <div onClick={() => setClickFavorite(!clickFavorite)}>

                        <FavoriteButton
                            added={favorite && favorite.some((i) => i.id === Anime.id)}
                            addToList={() => { user && FavoriteClick({ Anime, user }) }}
                        />
                    </div>

                </div>
            </div>
            <Modal ID={Anime.id} type={Anime.title ? 'movie' : 'tv'} name={Anime.title || Anime.name} />
        </section>
    )
}
