import React, { useCallback, useContext, useState } from "react";
import { IAnimes } from "../../../typing.d.ts.jsx";
import Image from "next/image.js";
import apiVariables from "../../../utils/apiVariables";
import { Context } from "../../../contexts/ContextProvider";

import { SlArrowRight, SlArrowLeft } from 'react-icons/sl'
import { useRouter } from "next/router.js";

interface Props {
    items: IAnimes[],
    title: string
}

export default function RowAnime({ items, title }: Props) {

    const { selectedAnime, setSelectedAnime } = useContext(Context)
    const [scrollList,setScrollList] = useState(0)
    const base_url = apiVariables.images.base_url
    const size = apiVariables.images.poster_sizes
    const poster = `${base_url}${size[3]}`;
    const router = useRouter()

    const setSelectedAnimeCall = useCallback(
        (i: IAnimes) => {
            setSelectedAnime(i)
        }, [setSelectedAnime]
    )

    const leftArrowHandle = () => {
        let x = scrollX + Math.round(window.innerWidth/1.2)
        if(x > 0){x=0}
        setScrollList(x)
    }
    const RightArrowHandle = () => {
        let x = scrollX - Math.round(window.innerWidth/1.2)
        let listW = items.length * 150
        if((window.innerWidth - listW) > x){
            x=(window.innerWidth - listW) -60
        }
        setScrollList(x)
    }

    return (
        <div >
            <h2 style={{marginLeft:10}} className=" pl-2 font-bold border-solid border-yellow border-l-4">{title}</h2>
            <div className="AnimeRow">
                <div className="cursor-pointer Arrow bg-gradient-to-r from-black/50 to-transparent transition-all duration-500"
                    onClick={leftArrowHandle}
                >
                    <SlArrowLeft  style={{fontSize:'40'}}/>
                </div>
                <div className="cursor-pointer right-0 Arrow bg-gradient-to-l from-black/75 to-transparent transition-all duration-500"
                    onClick={RightArrowHandle}
                >
                    <SlArrowRight style={{fontSize:'40'}}/>
                </div>
                <div className="flex transition-all duration-500" style={{marginLeft:scrollList}}>
                {items.map(i =>
                    <Image
                        priority={true}
                        width={0}
                        height={0}
                        style={{ height: "auto", width: 150, margin: -15}}
                        className="
                    flex-1
                    h-auto
                    rounded-2xl
                    scale-75
                    transition-all 
                    duration-300
                    transform 
                    border-2
                    border-transparent
                    hover:scale-100 
                    hover:z-30
                    hover:border-yellow
                    cursor-pointer
                    "
                        key={i.id}
                        src={`${poster}${i.poster_path}`} alt={i.name || i.title}
                        onMouseEnter={() => setSelectedAnimeCall(i)}
                        onClick={() => router.push(`/${i.name? 'tv' : 'movie'}/details/${i.id}`)}
                    />
                )}
                </div>
            </div>
        </div>
    )
}
