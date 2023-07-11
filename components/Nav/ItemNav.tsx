import React from "react";

interface Props {
    children: React.ReactNode,
    color: string,
    text: string,
    name?:string
}

export default function ItemNav({ children, name, color, text }: Props) {
    return (
        <button
            className={`
            flex
            justify-center
            flex-col
            text-center
            items-center
            bg-${color} 
            text-${text} 
            rounded 
            p-2
            w-[6rem]
            font-bold
            border-black
            border-2
            hover:border-white
            `}
        >
            <h3>{name}</h3>
            <>{children}</>
        </button>
    )
}
