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
    setOpenModal:() => {}
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
            setOpenModal
        }}
        >
            {children}
        </Context.Provider>
    )
}