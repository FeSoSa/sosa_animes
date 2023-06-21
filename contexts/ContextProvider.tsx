import { ReactNode, createContext, useState } from "react";
import { IAnimes, IContext } from "../typing.d.ts";

const InitialValue:IContext = {
    selectedAnime: undefined,
    setSelectedAnime:() => {},
    navOpen:false,
    setNavOpen:() => {},
    navBlack:false,
    setNavBlack:() => {},
    favorite:[],
    setFavorite:() => {}
}

interface Props{
    children:ReactNode | JSX.Element
}

export const Context = createContext<IContext>(InitialValue)

export function ContextProvider({children}:Props){
    const [selectedAnime,setSelectedAnime] = useState<IAnimes>()
    const [navOpen,setNavOpen] = useState(false)
    const [navBlack,setNavBlack] = useState(false)
    const [favorite,setFavorite] = useState<IAnimes[]>([])
    return(
        <Context.Provider
        value={{
            selectedAnime,
            setSelectedAnime,
            navOpen,
            setNavOpen,
            navBlack,
            setNavBlack,
            favorite,
            setFavorite
        }}
        >
            {children}
        </Context.Provider>
    )
}