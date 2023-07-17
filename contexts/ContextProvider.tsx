import { ReactNode, createContext, useState } from "react";
import { IAnimes, IContext } from "../typing.d.ts";

const InitialValue:IContext = {
    selectedAnime: undefined,
    setSelectedAnime:() => {},
    navToggle:false,
    setNavToggle:() => {},
    navBlack:false,
    setNavBlack:() => {},
    favorite:[],
    setFavorite:() => {},
    openModal:false,
    setOpenModal:() => {},
    brLang:true,
    setBrLang:() => {}
}

interface Props{
    children:ReactNode | JSX.Element
}

export const Context = createContext<IContext>(InitialValue)

export function ContextProvider({children}:Props){
    const [selectedAnime,setSelectedAnime] = useState<IAnimes>()
    const [navToggle,setNavToggle] = useState(false)
    const [navBlack,setNavBlack] = useState(false)
    const [favorite,setFavorite] = useState<IAnimes[]>([])
    const [openModal,setOpenModal] = useState(false)
    const [brLang,setBrLang] = useState(true)
    return(
        <Context.Provider
        value={{
            selectedAnime,
            setSelectedAnime,
            navToggle,
            setNavToggle,
            navBlack,
            setNavBlack,
            favorite,
            setFavorite,
            openModal,
            setOpenModal,
            brLang,
            setBrLang
        }}
        >
            {children}
        </Context.Provider>
    )
}