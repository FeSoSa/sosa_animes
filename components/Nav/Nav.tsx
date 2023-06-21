import Image from "next/image";
import React, { useContext } from "react";
import Logo from '../../public/assets/AnimeLogo.png'
import Links from "../Home/banner/Links";
import { Context } from "../../contexts/ContextProvider";
import Link from "next/link";

import {TbMovie} from 'react-icons/tb'
import {HiMagnifyingGlassCircle} from 'react-icons/hi2'
import {IoTvSharp} from 'react-icons/io5'

export default function Nav() {

  const { navOpen, setNavOpen } = useContext(Context)

  return (
    <header
      className={`fixed top-0 sm:min-h-screen sm:min-w-[16rem] bg-black p-5
        transition-all delay-50 duration-500 bg-opacity-50 z-[45] border-r-2 border-yellow
        translate-x-[-16rem] ${navOpen && 'translate-x-[0]'}
      `}
      onMouseOver={() => setNavOpen(true)}
      onMouseOut={() => setNavOpen(false)}
      style={{ display: "flex", alignItems: 'center', flexDirection: "column" }}
    >

      <nav>
        <div className="pb-10 ml-10">
          <Image src={Logo} alt="Imagem SoSaAnime" width={75} height={75} />
        </div>
        <div >
          <Links Icon={HiMagnifyingGlassCircle}>Procurar</Links>
          <Links Icon={IoTvSharp}>Categorias</Links>
          <Links Icon={TbMovie}>Filmes</Links>
          <Links>Entre em contato</Links>
        </div>
      </nav>
        <Link target="_blank" href={"https://portfolio-fb.vercel.app"} 
        className="absolute bottom-0 m-5 p-1 inline-block font-bold border-2 
        border-transparent text-green bg-white rounded hover:border-yellow cursor-pointer transition-all duration-200 hover:scale-110">
          FeSoSa
        </Link>
    </header>
  )
}