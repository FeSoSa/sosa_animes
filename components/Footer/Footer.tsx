import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/ContextProvider";
import { Translations } from "../../constants/Translations";

export default function Footer() {

    const {brLang} = useContext(Context)
    const BR = Translations.BR.home
    const ENG = Translations.ENG.home
    const [selectedLang,setSelectedLang] = useState(BR)
    useEffect(() => {
        if(brLang){
            setSelectedLang(BR)
        }else{ setSelectedLang(ENG) }
    },[brLang,selectedLang,BR,ENG])

    return (
        <footer className="absolute bg-black w-full border-t-2 border-yellow text-center p-5 items-center justify-center ">
            <p><b>SosaAnime</b> - {selectedLang.footer}</p>
            <Link href={'https://portfolio-fb.vercel.app'} target="_blank">
                <p className="inline-block text-green hover:border-b-yellow border-b-2 border-transparent">
                    <b> Portfólio FeSoSa </b>
                </p>
            </Link>
        </footer>
    )
}
