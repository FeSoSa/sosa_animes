import React, { useEffect, useState } from "react";
import { IAnimes } from "../../typing.d.ts";
import Stars from "../Home/banner/Stars";
import Genres from "../Home/banner/Genres";
import Image from "next/image.js";
import { banner } from "../../utils/apiVariables";

interface Props {
    Anime: IAnimes;
}

export default function DetailsTop({ Anime }: Props) {
    useEffect(() => {
        getIDS();
    }, []);

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

    console.log(Anime);

    return (
        <main className="mt-[50vh] p-10 bg-black bg-opacity-75">
            <section className="flex">
                <div className="w-[50%] border-r-2 border-yellow flex flex-col gap-2">
                    <div>
                        <div>
                            <span className="text-4xl pr-2">{Anime.name || Anime.title}</span>
                            {Anime.name
                                ? <span className="text-[gray]">Série de TV</span>
                                : <span className="text-[gray]">Filme</span>
                            }
                        </div>
                        <h2 className="text-[gray]">{Anime.original_name || Anime.original_title}</h2>
                    </div>
                    <div className="flex-row flex gap-2">
                        <Stars stars={Anime.vote_average} />
                        <Genres genres={Anime.genre_ids || genreID} mediaType={Anime.name ? 'tv' : 'movie'} />
                    </div>
                    {Anime.name &&
                        <p>{Anime.number_of_seasons} {Anime.number_of_seasons && Anime.number_of_seasons > 1 ? 'Temporadas' : 'Temporada'}</p>
                    }
                </div>
                <div className="max-w-[50%] pl-5">
                    {Anime.overview}
                </div>
            </section>

            <section>
                <div className="flex justify-center pt-10">
                    {Anime.production_companies && Anime.production_companies[0].logo_path &&
                        <Image
                            src={`${banner}${Anime.production_companies[0].logo_path}`}
                            alt={Anime.production_companies && Anime.production_companies[0].name ? Anime.production_companies[0].name : ""}
                            width={0} height={0} style={{ width: 150 }}
                        />
                    }
                </div>
            </section>
        </main>
    );
}
