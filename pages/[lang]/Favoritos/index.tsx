import React, { useContext, useEffect, useState } from "react";

import { BsFillLightningChargeFill } from 'react-icons/bs'
import Image from "next/image";
import apiVariables from "../../../utils/apiVariables";
import Link from "next/link";
import { getList } from "../../../db/Controller";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../db/firebaseConfig";
import { IAnimes } from "../../../typing.d.ts";
import { Context } from "../../../contexts/ContextProvider";

export default function Favoritos() {

    const { favorite, setFavorite, translation,language } = useContext(Context)
    const base_url = apiVariables.images.base_url
    const size = apiVariables.images.poster_sizes
    const poster = `${base_url}${size[3]}`;
    const [user] = useAuthState(auth)

    useEffect(() => {
        const getFavorites = async () => {
            if (user) {
                const data = await getList(user);
                const addedItemIds = new Set(favorite.map((item) => item.id));
                const newItems = data.filter((item) => !addedItemIds.has(item.id));

                // Create a new array containing all items from favorite and newItems without duplicates
                const updatedFavorites = [...favorite, ...newItems];

                // Update the state with the updatedFavorites array
                setFavorite(updatedFavorites);
            }
        };
        getFavorites();
    }, [user, favorite]);

    return (
        <main className="bg-[#222222]">
            <header className="text-[2rem] h-[5rem] w-screen flex justify-center items-center  text-yellow border-b border-yellow">
                <BsFillLightningChargeFill /><h2>{translation.geral.favorites}</h2>
            </header>
            <div className="w-screen h-screen">
                <div className="flex justify-center p-5 gap-7  flex-wrap">
                    {favorite.map((i) => (
                        <Link href={`/${language}/${i.name ? 'tv' : 'movie'}/details/${i.id}`} key={i.id}>
                            <Image
                                priority
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
