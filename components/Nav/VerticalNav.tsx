import React, { useContext, useEffect, useRef, useState } from "react";
import { Context, ContextProvider } from "../../contexts/ContextProvider";
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { motion } from 'framer-motion';
import Link from "next/link";
import ItemNav from "./ItemNav";
import { Switch } from "@headlessui/react";
import { Translations } from "../../constants/Translations";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../db/firebaseConfig'

import { AiFillHome, AiFillPhone, AiFillAppstore } from 'react-icons/ai'
import { MdMovie } from 'react-icons/md'
import { BsFillLightningFill, BsPersonCircle } from 'react-icons/bs'

export default function VerticalNav() {
    const navRef = useRef<HTMLButtonElement>(null);
    const BR = Translations.BR
    const ENG = Translations.ENG
    const { language, setLanguage, translation, setTranslation } = useContext(Context)
    const [switchLang, setSwitchLang] = useState(true)
    const [user, loading] = useAuthState(auth)
    const router = useRouter()

    const [isHome,setIsHome] = useState(false)
    useEffect(() => {
        const checkURL = () => {
            const pathname = window.location.pathname;
            const isPtBr = pathname === '/pt-br';
            const isEnUs = pathname === '/en-us';
            setIsHome(isPtBr || isEnUs);
        };

        // Adicione um event listener para monitorar alterações na URL
        const handlePopstate = () => {
            checkURL();
        };

        window.addEventListener('popstate', handlePopstate);
        checkURL(); // Verifica a URL inicialmente

        // Remova o event listener quando o componente for desmontado
        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    });

    useEffect(() => {
        if (!loading && !user) {

            router.replace(`/${language}/Login`)
        }
    }, [loading, user, language])

    const { setNavToggle, navToggle, navBlack, setNavBlack } = useContext(Context);
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

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                event.target instanceof HTMLElement &&
                !event.target.id.includes('Menu') &&
                !event.target.id.includes('Changelanguage') &&
                !event.target.id.includes('Account') &&
                !event.target.id.includes('Favorites') &&
                !event.target.id.includes('Home') &&
                !event.target.id.includes('TvSeries') &&
                !event.target.id.includes('Movies') &&
                !event.target.id.includes('About')
            ) {
                setNavToggle(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [language, navToggle, setNavToggle]);

    useEffect(() => {
        if (switchLang && user && language !== 'pt-br') {
            setLanguage('pt-br')
            setTranslation(BR)
            router.push('/pt-br')
        } else if (!switchLang && user && language !== 'en-us') {
            setLanguage('en-us')
            setTranslation(ENG)
            router.push('/en-us')
        }
    }, [switchLang, language]);

    const style = {
        display: 'flex',
        fontSize: '2rem',
        color: 'white',
    }

    return (
        <>
            {!loading && user &&
                <header className="w-[100vw] h-[60px] bg-black fixed z-[99] shadow-md shadow-yellow/25 flex items-center px-5 gap-5 text-center items-center justify-between">
                    <div className="flex gap-5 items-center">
                        <Link href={`/${language}/Conta`} id="Account" onClick={(event) => { event.stopPropagation(); }}>
                            {user
                                ? <Image src={user.photoURL!} alt="User Photo" width={40} height={40} className="rounded-[50%]" />
                                : <BsPersonCircle className="text-[4.5rem] text-white mt-5" />
                            }
                        </Link>
                        {!isHome &&
                        <Link href={`/${language}`} id="Home" onClick={(event) => { event.stopPropagation(); }}>
                            <ItemNav color="dark_gray p-[7px]" text="white"><FaHome /></ItemNav >
                        </Link>}
                        <Link href={`/${language}/Favoritos`} id="Favorites" onClick={(event) => { event.stopPropagation(); }}>
                            <ItemNav name={translation.nav.favorite} color="dark_gray p-[5px]" text="white"></ItemNav >
                        </Link>
                        <Link href={`/${language}/tv/geral/1`} id="TvSeries" onClick={(event) => { event.stopPropagation(); }}>
                            <ItemNav name={translation.nav.categories} color="dark_gray p-[5px]" text="white"></ItemNav >
                        </Link>
                        <Link href={`/${language}/movie/geral/1`} id="Movies" onClick={(event) => { event.stopPropagation(); }}>
                            <ItemNav name={translation.nav.movies} color="dark_gray p-[5px]" text="white"></ItemNav >
                        </Link>
                        <Link href={`/${language}/Sobre`} id="About" onClick={(event) => { event.stopPropagation(); }}>
                            <ItemNav name={translation.nav.about} color="dark_gray p-[5px]" text="white"></ItemNav >
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Switch
                            id="Changelanguage"
                            checked={switchLang}
                            onChange={setSwitchLang}
                            className={`relative inline-flex h-[30px] w-[62px] shrink-0 cursor-pointer
                            rounded-full border-2 border-transparent transition-all duration-500 ease-in-out 
                            focus:outline-none focus-visible:ring-2  focus-visible:ring-white 
                            focus-visible:ring-opacity-75 bg-white`}
                            onClick={(event) => { event.stopPropagation(); }}
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
                </header>
            }
        </>

    )
}
