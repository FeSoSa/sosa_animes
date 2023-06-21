import React from "react";

interface Props {
    children: React.ReactNode,
    color: string,
    text: string,
}

export default function Button({ children, color, text}: Props) {
    return (
        <button
            className={`bg-${color} text-${text} rounded mr-5 text-white font-bold hover:bg-opacity-75`}
        >
            <p className={`transiton-all p-2 pl-5 pr-5  duration-500 `} >
                {children}
            </p>
        </button>
    )
}
