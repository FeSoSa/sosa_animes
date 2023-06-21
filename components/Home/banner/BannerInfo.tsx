import React, { useContext, useState } from "react";
import { IAnimes } from "../../../typing.d.ts";
import Stars from "./Stars";
import Genres from "./Genres";
import Button from "./Button";
import { Context } from "../../../contexts/ContextProvider";
import FavoriteButton from "./FavoriteButton";
import addToList from "../../../utils/addToList";

interface Props {
    Anime: IAnimes
}

export default function BannerInfo({ Anime }: Props) {

    const { favorite, setFavorite } = useContext(Context)

    return (
        <section>
            <div style={{ height: 120, padding: 45 }}>
                {Anime?.name?.length < 35 || Anime?.title?.length < 35
                    ? <h2 style={{ fontSize: 40, width: 650, paddingTop: 25, fontWeight: 'bold' }}>{Anime.name}</h2> || <h2 style={{ fontSize: 40, width: 650 }}>{Anime.title}</h2>
                    : <h2 style={{ fontSize: 40, width: 650, fontWeight: 'bold' }}>{Anime.name.slice(0, 60)}</h2> || <h2 style={{ fontSize: 40, width: 650 }}>{Anime.title.slice(0, 60)}</h2>
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
                <div className="flex">
                    <div>
                        <Button color='yellow' text='white'>Ver Trailer</Button>
                    </div>
                    <div>
                        <Button color='black' text="white">Detalhes</Button>
                    </div>
                    <div>
                        <FavoriteButton
                            added={favorite && favorite.some((i) => i.id === Anime.id)}
                            addToList={() => { addToList({ Anime, favorite, setFavorite }) }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
