import React, { Dispatch, SetStateAction, useState } from "react";
import { SortBy } from "../../constants/SortBy";

import { BsChevronDown } from 'react-icons/bs'
import { Transition } from "@headlessui/react";

interface Props {
    setSort: Dispatch<SetStateAction<string>>;
    sort: string;
}

export default function SelectSort({ setSort, sort }: Props) {
    const [openSelect, setOpenSelect] = useState(false)

    const name = SortBy.find((option) => option.value === sort)

    return (
        <div className="w-[14rem]  text-black mt-2">
            <span
                className={`relative flex h-[2.5rem] items-center justify-between p-2  bg-white rounded cursor-pointer
                before:absolute before:content-['Ordenar_por'] before:-top-3
                before:text-sm before:bg-black before:px-1 before:py-0 
                before:font-thin before:text-white before:rounded hover:bg-gray focus:border-2`}
                onBlur={() => openSelect == true && setOpenSelect(!openSelect)}
                onClick={() => setOpenSelect(!openSelect)}
                tabIndex={0}
            >
                <h1>{name?.label}</h1>
                <BsChevronDown
                    className={`${openSelect && 'rotate-180'} transition duration-300`}
                />
            </span>
            <Transition
                show={openSelect}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transform duration-500 transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-70 "
                className="flex justify-center"
            >
                <div className="bg-white rounded mt-2 flex flex-col absolute w-[12rem] text-center">

                    {

                        SortBy.map((i) =>
                            <h1
                                className="
                                    hover:bg-[#FFD966] hover:shadow-md p-2 cursor-pointer hover:rounded z-50"
                                onClick={() => setSort(i.value)}
                                key={i.value}
                            >
                                {i.label}
                            </h1>
                        )

                    }

                </div>
            </Transition>
        </div>
    );
}