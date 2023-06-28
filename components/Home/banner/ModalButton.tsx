import React, { useContext, useEffect, useState } from "react";
import Youtube from "react-youtube";
import { IVideo } from "../../../typing.d.ts";
import { Context } from "../../../contexts/ContextProvider";

interface Props {
    children: React.ReactNode,
    color: string,
    text: string,
    TrailerID:string | number
}

export default function ModalButton({ children, color, text, TrailerID }: Props) {

    const {openModal, setOpenModal} = useContext(Context)
    const HandleClick = () => {
        setOpenModal(true)
    }

    return (
        <>
            <button
                onClick={HandleClick}
                className={`
            bg-${color} 
            text-${text} 
            rounded 
            p-2
            w-[8rem] 
            font-bold
            border-black
            border-2
            hover:border-white
            `}
            >
                {children}
            </button>
        </>
    )
}


