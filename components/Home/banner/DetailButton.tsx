import { useRouter } from "next/router";
import React from "react";

interface Props {
    children: React.ReactNode,
    color: string,
    text: string,
    id: number,
    type:'tv' | 'movie'
}

export default function DetailButton({ children, color, text, id ,type}: Props) {
    const route = useRouter()

    return (
        <button
            onClick={() => route.push(`/details/${type}/${id}`)}
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
