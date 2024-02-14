import React, { useCallback, useContext, useState } from "react";
import { IAnimes } from "../../../typing.d.ts.jsx";
import Image from "next/image.js";
import apiVariables from "../../../utils/apiVariables";
import { Context, ContextProvider } from "../../../contexts/ContextProvider";

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useRouter } from "next/router.js";

interface Props {
    items: IAnimes[];
    title: string;
    style: "G" | "M" | "S";
}

export default function RowAnime({ items, title, style }: Props) {
    const { selectedAnime, setSelectedAnime, language } = useContext(Context);
    const [scrollList, setScrollList] = useState(0);
    const base_url = apiVariables.images.base_url;
    const size = apiVariables.images.poster_sizes;
    const poster = `${base_url}${size[3]}`;
    const router = useRouter();

    const setSelectedAnimeCall = useCallback(
        (i: IAnimes) => {
            setSelectedAnime(i);
        },
        [setSelectedAnime]
    );

    const leftArrowHandle = () => {
        let x = scrollList + Math.round(window.innerWidth / 1.2);
        if (x > 0) {
            x = 0;
        }
        setScrollList(x);
    };
    const RightArrowHandle = () => {
        const widthCard = style == "G" ? 310 : style == "M" ? 210 : 110

        let x = scrollList - Math.round(window.innerWidth / 1.2);
        let listW = items.length * widthCard
        if (window.innerWidth - listW > x) {
            x = window.innerWidth - listW - 60;
        }
        setScrollList(x);
    };

    return (
        <div>
            <h2
                style={{ marginLeft: 10 }}
                className=" pl-2 font-bold border-solid border-yellow border-l-4 text-2xl"
            >
                {title}
            </h2>

            <div className="relative AnimeRow">
                
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer Arrow bg-gradient-to-r from-black/50 to-black/25 transition-all duration-500 rounded-r-2xl p-5"
                    onClick={leftArrowHandle}>
                    <SlArrowLeft style={{ fontSize: '40' }} />
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer Arrow bg-gradient-to-l from-black/75 to-black/25 transition-all duration-500 rounded-l-2xl p-5"
                    onClick={RightArrowHandle}>
                    <SlArrowRight style={{ fontSize: '40' }} />
                </div>

                <div
                    className="flex transition-all duration-500 max-md:overflow-x-hidden"
                    style={{ marginLeft: scrollList }}
                >
                    {items.map((i) => (
                        <Image
                            priority={true}
                            width={0}
                            height={0}
                            className={`
                                m-[-20px]  
                                  ${style === "G"
                                    ? "w-[350px]"
                                    : style === "M"
                                        ? "w-[250px]"
                                        : "w-[150px]"
                                }
                                h-auto
                                scale-75
                                transition-all 
                                duration-300
                                transform 
                                border-2
                                border-transparent
                                lg:hover:scale-100 
                                hover:z-30
                                hover:border-yellow
                                cursor-pointer
                        `}
                            key={i.id}
                            src={`${poster}${i.poster_path}`}
                            alt={i.name || i.title}
                            onMouseEnter={() => setSelectedAnimeCall(i)}
                            onClick={() =>
                                router.push(
                                    `/${language}/${i.name ? "tv" : "movie"}/details/${i.id}`
                                )
                            }
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
