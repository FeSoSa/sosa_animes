import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import Icon from '../../../public/assets/AnimeIcon.png'
import GoogleButton from "../../../components/Login/GoogleButton";
import GithubButton from "../../../components/Login/GithubButton";
import bgGray from "../../../public/assets/bgGray.png";
import { IAnimes } from "../../../typing.d.ts";
import getSlider from "../../../utils/getSlider";
import { banner } from "../../../utils/apiVariables";
import Head from "next/head";
import { Switch } from "@headlessui/react";
import { Context } from "../../../contexts/ContextProvider";
import { Translations } from "../../../constants/Translations";
import { useRouter } from "next/router";

export default function Login() {
    const [bgBanner, setbgBanner] = useState(`url(${bgGray.src})`)
    const [list, setList] = useState<IAnimes[]>()
    const [rand, setRand] = useState(0)
    const [switchLang, setSwitchLang] = useState(true)
    const { language, setLanguage, translation, setTranslation } = useContext(Context)
    const BR = Translations.BR
    const ENG = Translations.ENG

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
        if (switchLang && language !== 'pt-br') {
            setLanguage('pt-br')
            setTranslation(BR)
        } else if (!switchLang && language !== 'en-us') {
            setLanguage('en-us')
            setTranslation(ENG)
        }
    }, [switchLang]);

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
                        <h1 className="font-bold text-4xl">{translation.login.login}</h1>
                        <GoogleButton />
                        <GithubButton />
                    </div>
                    <Switch
                        checked={switchLang}
                        onChange={setSwitchLang}
                        className={`absolute top-1 left-3 mt-4 inline-flex h-[30px] w-[62px] shrink-0 cursor-pointer
                            rounded-full border-2 border-transparent transition-all duration-500 ease-in-out 
                            focus:outline-none focus-visible:ring-2  focus-visible:ring-white 
                            focus-visible:ring-opacity-75 bg-white`}
                    >
                        <span
                            aria-hidden="true"
                            style={{ backgroundImage: switchLang ? 'url(/assets/brIcon.png)' : 'url(/assets/euaIcon.png)' }}
                            className={`${switchLang ? 'translate-x-8' : 'translate-x-0'} bg-center bg-contain pointer-events-none 
                            inline-block h-[26px] w-[26px] transform rounded-full shadow-lg ring-0 transition 
                            duration-200 ease-in-out`}
                        />
                    </Switch>
                </div>
            </main>
        </>
    )
}
