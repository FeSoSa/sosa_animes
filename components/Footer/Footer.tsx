import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/ContextProvider";
import { Translations } from "../../constants/Translations";

export default function Footer() {

    const {translation} = useContext(Context)

    return (
        <footer className="absolute bg-black w-full h-[13vh] border-t-2 border-yellow text-center p-5 items-center justify-center ">
            <p><b>SosaAnime</b> - {translation.geral.footer}</p>
            <Link href={'https://portfolio-fb.vercel.app'} target="_blank">
                <p className="inline-block text-green hover:border-b-yellow border-b-2 border-transparent">
                    <b> Portfólio FeSoSa </b>
                </p>
            </Link>
        </footer>
    )
}
