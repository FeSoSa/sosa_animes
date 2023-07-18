import React, { useEffect, useState } from "react";
import Image from "next/image";

import Icon from '../../public/assets/AnimeIcon.png'
import GoogleButton from "../../components/Login/GoogleButton";
import GithubButton from "../../components/Login/GithubButton";
import bgGray from "../../public/assets/bgGray.png";
import { IAnimes } from "../../typing.d.ts";
import getSlider from "../../utils/getSlider";
import { banner } from "../../utils/apiVariables";
import Head from "next/head";
import Loading from "../../components/Loading/Loading";

export default function Login() {
    const [bgBanner, setbgBanner] = useState(`url(${bgGray.src})`)
    const [list, setList] = useState<IAnimes[]>()
    const [rand, setRand] = useState(0)

    const random = () => {
        if (list) {
            const random = Math.random() * list.length
            const rand = Math.floor(random)
            return setRand(rand)
        }
    }

    const getList = async () => {
        const response = await getSlider()
        setList(response)
    }

    useEffect(() => {
        if (!list) {
            getList()

        }
    }, [list])

    useEffect(() => {
        if (list) {
            setbgBanner(`url(${banner}${list[rand].backdrop_path})`)
        }
    }, [list, rand])



    useEffect(() => {
        const interval = setInterval(random, 8000);

        return () => {
            clearInterval(interval);
        };
    }, [list]); // Adicionado list como dependência para reiniciar o setInterval quando list for atualizado

    return (
        <>
            <Head>
                <title>SoSa Anime</title>
                <meta
                    name="description"
                    content="SoSa Anime"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../../favicon.ico" />
            </Head>
            <main className={'w-screen h-screen bg-cover'}
                style={{
                    backgroundImage: bgBanner,
                    transition: "background-image 1000ms ease-in-out",
                }}
            >
                <div className="bg-black bg-opacity-75 flex justify-around items-center w-full h-full">
                    <Image src={Icon} width={0} height={0} alt="Icon" style={{ width: 350, height: 'auto' }} />
                    <div className="bg-[#333333] rounded-2xl p-10 flex flex-col items-center gap-5 border-2 border-[#222222]
                transition-all hover:border-yellow duration-500
            ">
                        <h1 className="font-bold text-4xl">Login</h1>
                        <GoogleButton />
                        <GithubButton />
                    </div>
                </div>
            </main>
        </>
    )
}
