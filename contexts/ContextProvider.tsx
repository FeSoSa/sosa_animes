import { ReactNode, createContext, useState } from "react";
import { IAnimes, IContext } from "../typing.d.ts";
import { Translations } from "../constants/Translations";

const BR = Translations.BR

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
    language:'pt-br',
    setLanguage:() => {},
    translation:BR,
    setTranslation:() => {}
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
    const [language,setLanguage] = useState('pt-br')
    const [translation, setTranslation] = useState(BR)
    
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
            language,
            setLanguage,
            translation,
            setTranslation
        }}
        >
            {children}
        </Context.Provider>
    )
}