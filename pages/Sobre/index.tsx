import React, { useContext, useEffect, useState } from "react";
import { tools } from "../../constants/tools";

import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai'
import { RiPagesFill, RiSmartphoneFill } from 'react-icons/ri'
import Link from "next/link";
import { Context } from "../../contexts/ContextProvider";
import { Translations } from "../../constants/Translations";

export default function Sobre() {

    const [copy, setCopy] = useState(false)

    const { brLang } = useContext(Context)
    const BR = Translations.BR.about
    const ENG = Translations.ENG.about
    const [selectedLang, setSelectedLang] = useState(BR)
    useEffect(() => {
        if (brLang) {
            setSelectedLang(BR)
        } else { setSelectedLang(ENG) }
    }, [brLang, selectedLang, BR, ENG])

    const copyButton = () => {
        setCopy(true);
        navigator.clipboard.writeText("felipesouzasalles@gmail.com");
        setTimeout(() => {
            setCopy(false);
        }, 3000);
    };

    return (
        <div className="w-screen min-h-screen grid grid-rows-1 grid-cols-3">
            <section className="flex items-center flex-col w-full">
                <div className="bg-yellow p-3 rounded w-fit mt-[4rem]">
                    <h1 className=" text-4xl font-bold">
                        {selectedLang.title}
                    </h1>
                </div>
                <div className="w-full">
                    <h2 className="text-xl p-5 text-center">{selectedLang.tools}</h2>
                    <div className="bg-[#444444] border-2 border-yellow max-h-[27rem] p-5 ml-5 mr-5 rounded-md text-center list-none flex gap-2 flex-col text-lg font-thin">
                        {tools.map((i, index) => (
                            <li key={index}>{i}</li>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col items-center p-5">
                <div className="bg-[#333333] rounded-md border-2 border-yellow w-full h-full p-5 text-center">

                    <h2 className="font-bold text-lg p-2 text-yellow">SoSa Anime é um projeto de Informações de Animes</h2>
                    <ul className="list-disc list-inside flex flex-col gap-2">
                        <li>Pesquisa de Animes por Nome</li>
                        <li>Ranking de popularidades do Animes no momento</li>
                        <li>Adicionar a sua lista favoritos para encontrar-los com facilidade</li>
                        <li>Reprodução de Trailers</li>
                    </ul>
                    <h2 className="font-bold text-lg p-2 text-yellow">Por que criei esse app?</h2>
                    <p>Para aprender mais sobre Front-end, expandir meu conhecimento e ter um projeto mais complexo para Portfólio</p>

                </div>
            </section>
            <section className="w-full flex flex-col justify-center items-center p-5">
                <h2 className="text-3xl bg-yellow rounded-md p-2 font-bold">{selectedLang.contacts}</h2>
                <div className="flex flex-col gap-5">

                    <Link href={"https://github.com/FeSoSa"} target="_blank" className="flex flex-row items-center gap-2 text-xl mt-10 hover:text-yellow font-thin">
                        <AiFillGithub /> GitHub
                    </Link>

                    <Link href={"https://portfolio-fb.vercel.app"} target="_blank" className="flex flex-row items-center gap-2 text-xl hover:text-yellow font-thin">
                        <RiPagesFill /> Portfólio
                    </Link>

                    <Link href={"tel:+5511971561529"} className="flex flex-row items-center gap-2 text-xl hover:text-yellow font-thin">
                        <RiSmartphoneFill /> Telephone
                    </Link>

                    <div className="flex flex-row cursor-pointer items-center gap-2 text-xl hover:text-yellow font-thin" onClick={() => copyButton()}>
                        <AiFillMail /> {copy ? 'Copiado' : 'Email'}
                    </div>

                    <Link href={"https://www.instagram.com/felipe.jsx/"} target="_blank" className="flex flex-row items-center gap-2 text-xl hover:text-yellow font-thin">
                        <AiFillInstagram /> Instagram
                    </Link>

                </div>

            </section>
        </div>
    )
}
