import React, { useCallback, useContext, useState } from "react";
import { IAnimes, IDetails } from "../../../typing.d.ts";
import Image from "next/image.js";
import apiVariables, { banner } from "../../../utils/apiVariables";
import { Context, ContextProvider } from "../../../contexts/ContextProvider";

import { useRouter } from "next/router.js";

interface Props {
    anime: IAnimes | undefined;
    title: string;
}

export default function Highlight({ anime, title }: Props) {
    const { selectedAnime, setSelectedAnime, language } = useContext(Context);
    const [scrollList, setScrollList] = useState(0);
    const base_url = apiVariables.images.base_url;
    const size = apiVariables.images.poster_sizes;
    const poster = `${base_url}${size[3]}`;
    const router = useRouter();

    return (
        <>
            {anime && anime.backdrop_path &&
                <section className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    text-2xl
                    gap-[10px]
                    w-fit
                    
                ">
                    <div className="flex flex-row justify-center gap-5 max-md:flex-col">
                    <aside style={{width:'400px',overflowY:'hidden'}} className="flex flex-col items-center text-center h-[300px] max-md:h-[160px] max-md:px-2">
                        <p className="text-yellow"><b>{anime.name || anime.title}</b></p>
                        <span className="text-xs font-bold">{title}</span>
                        <p className="text-lg">{anime.overview}</p>
                    </aside>
                    <Image
                        priority={true}
                        width={0}
                        height={0}
                        className={`cursor-pointer rounded-sm w-[60vw] max-md:w-[100vw]`}
                        style={{height: '300px', objectFit: 'cover' }}
                        key={anime.id}
                        src={`${banner}${anime.backdrop_path}`}
                        alt={anime.name || anime.title}
                        onClick={() =>
                            router.push(
                                `/${language}/${anime.name ? "tv" : "movie"}/details/${anime.id}`
                            )
                        }
                    />
                    </div>

                </section>
            }
        </>
    );
}
