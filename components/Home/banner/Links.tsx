import React from "react";

interface Props{
    Icon?:React.ElementType,
    children:React.ReactNode
}

export default function Links({Icon,children}:Props) {

    const style = {
        fontSize:'1.5rem'
    }

  return (
    <>
        <div className="cursor-pointer bg-purple gap-2 flex flex-row justify-around text-md font-bold transition-all duration-200 rounded-md text-center p-4 mb-5 shadow shadow-yellow hover:bg-yellow hover:scale-100 scale-90">
            {Icon && <Icon style={style}/>}{children}
        </div>
    </>
)
}
