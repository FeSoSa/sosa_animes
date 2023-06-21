import React, { useContext, useEffect } from "react";
import { Context } from "../../contexts/ContextProvider";
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { IconContext } from "react-icons";

export default function OpenNav() {

    const { setNavOpen, navOpen, navBlack, setNavBlack } = useContext(Context)
    const style = {
        fontSize: '2rem',
        color: 'white',
    }

    useEffect(() => {

        const scrollListener = () => {
            if(window.scrollY > 400) {
                setNavBlack(true)
            } else {
                setNavBlack(false)
            }
        }

        window.addEventListener('scroll',scrollListener)

        return () => {
            window.removeEventListener('scroll',scrollListener)
        }

    },[setNavBlack])


    return (
        <header className={`fixed w-[10rem] h-[3rem] z-40`}>
            <div className={`transition-all duration-500 ${navBlack && 'nav-gradient'}`}>
            <span className="fixed top-[0.5rem] sm:min-h-[2rem] sm:min-w-[2rem] bg-yellow 
            transition-all duration-200 rounded ml-2 cursor-pointer hover:bg-opacity-75"
                onClick={() => setNavOpen(true)}
            >
                <div className={`transition-all duration-500  ${navOpen && '-rotate-180'}`}>
                    <MdOutlineKeyboardDoubleArrowRight style={style} />
                </div>
            </span>
            </div>
        </header>
    )
}
