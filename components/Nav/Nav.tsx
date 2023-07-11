import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../../contexts/ContextProvider";
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { motion } from 'framer-motion';
import Link from "next/link";

import {AiFillHome,AiFillPhone,AiFillAppstore} from 'react-icons/Ai'
import {MdMovie} from 'react-icons/md'
import {BsFillLightningChargeFill,BsPersonCircle} from 'react-icons/bs'

import Logo from '../../public/assets/AnimeLogo.png'
import Button from "../Home/banner/Button";
import ItemNav from "./ItemNav";

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
                    <ul className="flex flex-col mt-2 gap-5 items-center">
                        <Link href="/conta" onClick={() => setNavToggle(false)}>
                            <BsPersonCircle style={{fontSize:'4.5rem', color:'white',marginTop:20}}/>
                        </Link>
                        <Link href="/" onClick={() => setNavToggle(false)}>
                            <ItemNav name="Home" color="yellow" text="white"><AiFillHome style={style}/></ItemNav >
                        </Link>
                        <Link href="/favoritos" onClick={() => setNavToggle(false)}>
                            <ItemNav name="Favoritos"  color="yellow" text="white"><BsFillLightningChargeFill style={style}/></ItemNav >
                        </Link>
                        <Link href="/tv/geral/1" onClick={() => setNavToggle(false)}>
                            <ItemNav name="Categorias"  color="yellow" text="white"><AiFillAppstore style={style}/></ItemNav >
                        </Link>
                        <Link href="/movie/geral/1" onClick={() => setNavToggle(false)}>
                            <ItemNav name="Filmes"  color="yellow" text="white"><MdMovie style={style}/></ItemNav >
                        </Link>
                        <Link href="/sobre" onClick={() => setNavToggle(false)}>
                            <ItemNav name="Sobre"  color="yellow" text="white"><AiFillPhone style={style}/></ItemNav >
                        </Link>

                    </ul>

                    <Link 
                        className="mb-5 rounded-md text-black bg-light_green shadow p-2 shadow-black absolute bottom-0 mb-1 font-bold cursor-pointer" 
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
