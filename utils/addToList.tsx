import { Dispatch, SetStateAction } from "react"
import { IAnimes } from "../typing.d.ts"

interface Props {
    Anime:IAnimes,
    favorite:IAnimes[],
    setFavorite:Dispatch<SetStateAction<IAnimes[]>>
}

const addToList = ({Anime,favorite,setFavorite}:Props) => {
    if(favorite.some((i) => i.id === Anime.id)){
        setFavorite((favorite) => [...favorite].filter((i) => i.id !== Anime.id))
    }else{
        setFavorite([...favorite,Anime])
    }
}
export default addToList