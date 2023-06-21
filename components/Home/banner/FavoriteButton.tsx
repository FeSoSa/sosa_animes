import React, { useContext, useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/Ai'
import { Context } from "../../../contexts/ContextProvider";
import { IAnimes } from "../../../typing.d.ts";

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
                    ? <AiOutlineCheck style={{ color: '#000', fontSize: 25 }} />
                    : <AiOutlinePlus style={{ color: '#000', fontSize: 25 }} />
                }
            </div>
        </button>
    )
}
