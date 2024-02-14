import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/ContextProvider";
import { Translations } from "../../constants/Translations";
import Image from "next/image";
import Sosa from '../../public/assets/sosa.png'

export default function Footer() {

    const {translation} = useContext(Context)

    return (
        <footer className="absolute bg-black w-full h-fit border-t-2 border-yellow text-center p-5 items-center justify-center py-10 flex flex-col gap-5">
            <p><b className="text-yellow">SosaAnime</b> - {translation.geral.footer}</p>
            <Link href={'https://portfolio-fb.vercel.app'} target="_blank" className="flex justify-center">
                <Image
                    className="w-[75px]"
                    width={0}
                    height={0}
                    alt="FeSosa"
                    src={Sosa}
                />
            </Link>
        </footer>
    )
}
