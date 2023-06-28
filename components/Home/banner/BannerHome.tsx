import React, { useContext, useEffect, useState } from "react";
import { AnimeEmpty, IAnimes } from "../../../typing.d.ts";
import { banner } from "../../../utils/apiVariables";
import NotFound from '../../../public/assets/NotFound.png'
import { Context } from "../../../contexts/ContextProvider";
import BannerInfo from "./BannerInfo";

interface Props {
    Banner: IAnimes[],
}

export default function BannerHome({
    Banner,
}: Props) {

    const [destaque, setDestaque] = useState<string>()
    const [info, setInfo] = useState<IAnimes>(AnimeEmpty)
    const { selectedAnime, setSelectedAnime } = useContext(Context)

    useEffect(() => {
        function random() {
            const random = Math.random() * Banner.length
            const rand = Math.floor(random)
            return rand
        }

        if (selectedAnime == null || undefined) {
            const rand = random()
            setDestaque(`url(${banner}${Banner[rand].backdrop_path})`)
            setInfo(Banner[rand])
        } else {
            if (selectedAnime?.backdrop_path == null) {
                setDestaque(`url(${NotFound.src})`)
                setInfo(selectedAnime)
            } else {
                setDestaque(`url(${banner}${selectedAnime?.backdrop_path})`)
                setInfo(selectedAnime)
            }
        }
    }
        , [Banner, selectedAnime, setSelectedAnime]);
    return (
        <>
            <header
                className="bg-cover bg-center h-[100vh]"
                id="banner"
                style={{
                    backgroundImage: destaque,
                    transition: "background-image 300ms ease-in-out",
                }}>
                <div className="bg-black bg-opacity-25 h-full">
                    <div className="gradient-v">
                        <div className="gradient-h">
                            <BannerInfo Anime={info} />
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}