import React from "react";

import { AiOutlinePlus} from 'react-icons/ai'
import {BsFillLightningChargeFill} from 'react-icons/bs'
interface Props {
    added:boolean,
    addToList:() => void,
}

export default function FavoriteButton({ added, addToList}: Props) {

    return (
        <button
            className={`rounded-3xl w-[40px] h-[40px] bg-white transition-all hover:scale-90 `}
            onClick={addToList}
        >
            <div className={`flex justify-center transiton-all duration-500 rotate-favorite`} >
                {added
                    ? <BsFillLightningChargeFill className="text-yellow text-[25px]"/>
                    : <AiOutlinePlus  className="text-black text-[25px]" />
                }
            </div>
        </button>
    )
}
