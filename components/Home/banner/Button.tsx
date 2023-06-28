import React from "react";

interface Props {
    children: React.ReactNode,
    color: string,
    text: string,
}

export default function Button({ children, color, text }: Props) {
    return (
        <button
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
