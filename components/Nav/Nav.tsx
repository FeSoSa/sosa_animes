import React, { useContext, useEffect, useRef, useState } from "react";
import { Context, ContextProvider } from "../../contexts/ContextProvider";
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { motion } from 'framer-motion';
import Link from "next/link";
import ItemNav from "./ItemNav";
import { Switch } from "@headlessui/react";

import { AiFillHome, AiFillPhone, AiFillAppstore } from 'react-icons/ai'
import { MdMovie } from 'react-icons/md'
import { BsFillLightningFill, BsPersonCircle } from 'react-icons/bs'
import { Translations } from "../../constants/Translations";

export default function OpenNav() {
    const { setNavToggle, navToggle, navBlack, setNavBlack } = useContext(Context);
    const navRef = useRef<HTMLButtonElement>(null);

    const {brLang,setBrLang} = useContext(Context)
    const BR = Translations.BR.nav
    const ENG = Translations.ENG.nav
    const [selectedLang,setSelectedLang] = useState(BR)
    useEffect(() => {
        if(brLang){
            setSelectedLang(BR)
        }else{ setSelectedLang(ENG) }
    },[brLang,selectedLang,BR,ENG])

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

useEffect(() => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node) &&
      event.target instanceof HTMLElement &&
      !event.target.id.includes('Changelanguage') &&
      brLang !== navToggle
    ) {
      setNavToggle(false);
    }
  };

  document.addEventListener("click", handleOutsideClick);

  return () => {
    document.removeEventListener("click", handleOutsideClick);
  };
}, [brLang, navToggle, setNavToggle]);

    return (
        <>
            <motion.nav
                id="menuRef"
                className={`flex w-[15rem] h-full fixed z-50`}
                ref={navRef}
                onBlur={() => setNavToggle(false)}
                initial={{ x: '-100%' }}
                animate={{ x: navToggle ? 0 : '-100%' }}
                transition={{ duration: 0.5 }}
                tabIndex={0}
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
                        <Link href="/conta" >
                            <BsPersonCircle style={{ fontSize: '4.5rem', color: 'white', marginTop: 20 }} />
                        </Link>
                        <Link href="/" >
                            <ItemNav name={selectedLang.home} color="yellow" text="white"><AiFillHome style={style} /></ItemNav >
                        </Link>
                        <Link href="/Favoritos" >
                            <ItemNav name={selectedLang.favorite} color="yellow" text="white"><BsFillLightningFill style={style} /></ItemNav >
                        </Link>
                        <Link href="/tv/geral/1" >
                            <ItemNav name={selectedLang.categories} color="yellow" text="white"><AiFillAppstore style={style} /></ItemNav >
                        </Link>
                        <Link href="/movie/geral/1" >
                            <ItemNav name={selectedLang.movies} color="yellow" text="white"><MdMovie style={style} /></ItemNav >
                        </Link>
                        <Link href="/Sobre" >
                            <ItemNav name={selectedLang.about} color="yellow" text="white"><AiFillPhone style={style} /></ItemNav >
                        </Link>
                    </ul>
                    <Switch
                        id="Changelanguage"
                        checked={brLang}
                        onChange={setBrLang}
                        className={`relative mt-4 inline-flex h-[30px] w-[62px] shrink-0 cursor-pointer
                            rounded-full border-2 border-transparent transition-all duration-500 ease-in-out 
                            focus:outline-none focus-visible:ring-2  focus-visible:ring-white 
                            focus-visible:ring-opacity-75 bg-white`}
                        onClick={(event) => { event.stopPropagation() ;  }} 
                    >
                        <span
                            aria-hidden="true"
                            style={{ backgroundImage: brLang ? 'url(/assets/brIcon.png)' : 'url(/assets/euaIcon.png)' }}
                            className={`${brLang ? 'translate-x-8' : 'translate-x-0'} bg-center bg-contain pointer-events-none 
                            inline-block h-[26px] w-[26px] transform rounded-full shadow-lg ring-0 transition 
                            duration-200 ease-in-out`}
                        />
                    </Switch>
                </div>
            </motion.nav>

            <button
                ref={navRef}
                className={`flex fixed w-[2rem] m-[1rem] h-[2rem] bg-yellow z-50 rounded ${navBlack && 'nav-gradient'} ${navToggle && 'bg-dark_gray'} hover:bg-opacity-75`}
                onClick={() => setNavToggle((prevState) => !prevState)}
            >
                <div className={`${navToggle && ''}`}>
                    <div className={`transition-all  duration-500  ${navToggle && '-rotate-180'}`}>
                        <MdOutlineKeyboardDoubleArrowRight style={style} />
                    </div>
                </div>
            </button>

        </>
    )
}
