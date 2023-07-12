import React, { useContext } from "react";

import { BsFillLightningChargeFill } from 'react-icons/bs'
import { Context } from "../contexts/ContextProvider";
import Image from "next/image";
import apiVariables from "../utils/apiVariables";
import Link from "next/link";

export default function Favoritos() {

    const { favorite, setFavorite } = useContext(Context)
    const base_url = apiVariables.images.base_url
    const size = apiVariables.images.poster_sizes
    const poster = `${base_url}${size[3]}`;

    return (
        <main className="bg-[#222222]">
            <header className="text-[2rem] h-[5rem] w-screen flex justify-center items-center  text-yellow border-b border-yellow">
                <BsFillLightningChargeFill /><h2>Favoritos</h2>
            </header>
            <div className="w-screen h-screen">
                <div className="flex justify-center p-5 gap-7  flex-wrap">
                    {favorite.map((i) => (
                        <Link href={`/${i.name?'tv':'movie'}/details/${i.id}`} key={i.id}>
                            <Image
                                className="transition-all duration-200 hover:scale-105 rounded-xl shadow-white hover:shadow hover:border-yellow border-2 border-transparent"
                                width={0}
                                height={0}
                                style={{ width: 150, height: 'auto' }}
                                src={`${poster}${i.poster_path}`} alt={i.name || i.title}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
