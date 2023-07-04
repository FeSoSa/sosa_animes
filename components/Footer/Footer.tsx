import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <section className="absolute bg-black w-full border-t-2 border-yellow text-center p-5 items-center justify-center ">
            <p><b>SosaAnime</b> - Projeto feito em Next.JS</p>
            <Link href={'https://portfolio-fb.vercel.app'} target="_blank">
                <p className="inline-block text-green hover:border-b-yellow border-b-2 border-transparent">
                    <b> Portfólio FeSoSa </b>
                </p>
            </Link>
        </section>
    )
}
