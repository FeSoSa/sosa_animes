import React, { useContext, useEffect, useState } from "react";
import { IAnimes } from "../../../typing.d.ts";
import Stars from "./Stars";
import Genres from "./Genres";
import Button from "./Button";
import { Context } from "../../../contexts/ContextProvider";
import FavoriteButton from "./FavoriteButton";
import addToList from "../../../utils/addToList";
import ModalButton from "./ModalButton";
import Modal from "./Modal";
import DetailButton from "./DetailButton";
import { Translations } from "../../../constants/Translations";

interface Props {
    Anime: IAnimes
}

export default function BannerInfo({ Anime }: Props) {

    const { favorite, setFavorite } = useContext(Context)

    const {brLang} = useContext(Context)
    const BR = Translations.BR.home
    const ENG = Translations.ENG.home
    const [selectedLang,setSelectedLang] = useState(BR)
    useEffect(() => {
        if(brLang){
            setSelectedLang(BR)
        }else{ setSelectedLang(ENG) }
    },[brLang,selectedLang,BR,ENG])

    return (
        <section>
            <div style={{ height: 120, padding: 45 }}>
                {Anime?.name?.length < 35 || Anime?.title?.length < 35
                    ? Anime?.name == null || undefined
                        ? <h2 style={{ fontSize: 40, width: 650, paddingTop: 25, fontWeight: 'bold' }}>{Anime?.title}</h2>
                        : <h2 style={{ fontSize: 40, width: 650, paddingTop: 25, fontWeight: 'bold' }}>{Anime?.name}</h2>
                    : Anime?.name == null || undefined
                        ? <h2 style={{ fontSize: 40, width: 650, fontWeight: 'bold' }}>{Anime?.title?.slice(0, 60)}</h2>
                        : <h2 style={{ fontSize: 40, width: 650, fontWeight: 'bold' }}>{Anime?.name?.slice(0, 60)}</h2>
                }
            </div>

            <div style={{ padding: 45 }}>
                <div className="flex flex-row gap-2">
                    <Stars stars={Anime.vote_average} /> <Genres genres={Anime.genre_ids} mediaType={Anime.name ? 'tv' : 'movie'} />
                </div>
                <div style={{ height: 120, width: 600, overflow: 'hidden', marginTop: 15 }}>
                    {Anime.overview.length > 300
                        ? Anime.overview.slice(0, 300) + '...'
                        : Anime.overview
                    }
                </div>
                <div className="flex gap-5">
                    <div>
                        <ModalButton TrailerID={Anime.id} color='yellow' text='white'>{selectedLang.trailer}</ModalButton>
                    </div>
                    <div>
                        <DetailButton type={Anime.title? 'movie' : 'tv'} id={Anime.id} color='black' text="white">{selectedLang.details}</DetailButton>
                    </div>
                    <div>
                        <FavoriteButton
                            added={favorite && favorite.some((i) => i.id === Anime.id)}
                            addToList={() => { addToList({ Anime, favorite, setFavorite }) }}
                        />
                    </div>
                </div>
            </div>
            <Modal ID={Anime.id} type={Anime.title?'movie':'tv'} name={Anime.title || Anime.name}/>
        </section>
    )
}
