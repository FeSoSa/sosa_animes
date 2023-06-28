import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../../contexts/ContextProvider";
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";

import Logo from '../../public/assets/AnimeLogo.png'
import Button from "../Home/banner/Button";

export default function OpenNav() {

    const { setNavToggle, navToggle, navBlack, setNavBlack } = useContext(Context)
    const menuRef = useRef<HTMLDivElement>(null);

    const style = {
        display: 'flex',
        fontSize: '2rem',
        color: 'white',
    }

    useEffect(() => {

        const scrollListener = () => {
            if (window.scrollY > 400) {
                setNavBlack(true)
            } else {
                setNavBlack(false)
            }
        }

        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }

    }, [setNavBlack])

    const NavClick = () => {
        setNavToggle(!navToggle)
    }


    return (
        <>
            <motion.nav
                className="flex w-[15rem] h-full fixed z-50"
                initial={{ x: '-100%' }}
                animate={{ x: navToggle ? 0 : '-100%' }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className={`
                    flex 
                    items-center
                    text-center 
                    flex-col 
                    w-[20rem] 
                    h-[100vh] 
                    bg-black
                    border-r-2
                    border-yellow
                    bg-opacity-75`}
                >
                    <Image className="m-2 mb-5" src={Logo} alt="Logo" width={75} height={75} />
                    <ul className="flex flex-col mt-2 gap-10">

                        <Link href="/">
                            <Button color="yellow" text="white">Procurar</Button>
                        </Link>
                        <Link href="/">
                            <Button color="yellow" text="white">Favoritos</Button>
                        </Link>
                        <Link href="/filmes">
                            <Button color="yellow" text="white">Categorias</Button>
                        </Link>
                        <Link href="/series">
                            <Button color="yellow" text="white">Filmes</Button>
                        </Link>
                        <Link href="/documentarios">
                            <Button color="yellow" text="white">Contato</Button>
                        </Link>

                    </ul>

                    <Link 
                        className="mb-5 rounded-md text-black bg-white shadow p-2 shadow-black absolute bottom-0 mb-1 font-bold cursor-pointer border-2 border-black hover:border-green" 
                        target="_blank" href={"https://portfolio-fb.vercel.app"}>
                        <p>
                            FeSOSA
                        </p>
                    </Link>
                </div>
            </motion.nav>

            <button
                className={`flex fixed w-[2rem] m-[1rem] h-[2rem] bg-yellow z-50 
               rounded ${navBlack && 'nav-gradient'} ${navToggle && 'bg-dark_gray'} hover:bg-opacity-75`}
                onClick={() => { NavClick() }}>
                <div className={`transition-all  duration-500  ${navToggle && '-rotate-180'}`}>
                    <MdOutlineKeyboardDoubleArrowRight style={style} />
                </div>
            </button>
        </>
    )
}
