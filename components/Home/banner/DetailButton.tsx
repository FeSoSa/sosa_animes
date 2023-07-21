import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../../../contexts/ContextProvider";

interface Props {
    children: React.ReactNode,
    color: string,
    text: string,
    id: number,
    type:'tv' | 'movie'
}

export default function DetailButton({ children, color, text, id ,type}: Props) {
    const router = useRouter()
    const {language} = useContext(Context)

    return (
        <button
            onClick={() => router.push(`/${language}/${type}/details/${id}`)}
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
    )
}
