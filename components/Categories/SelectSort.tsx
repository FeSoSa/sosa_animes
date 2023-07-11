import React, { Dispatch, SetStateAction, useState } from "react";
import { SortBy } from "../../constants/SortBy";

import { BsChevronDown } from 'react-icons/bs'

interface Props {
    setSort: Dispatch<SetStateAction<string>>;
    sort: string;
}

export default function SelectSort({ setSort, sort }: Props) {
    const [selectedSort, setSelectedSort] = useState(sort);
    const [openSelect, setOpenSelect] = useState(false)

    const name = SortBy.find((option) => option.value === selectedSort)

    return (
        <div className="w-[14rem]  text-black mt-2">
            <span
                className="relative flex h-[2.5rem] items-center justify-between p-2  bg-white rounded cursor-pointer
                before:absolute before:content-['Ordenar_por'] before:-top-3
                before:text-sm before:bg-black before:px-1 before:py-0 
                before:font-thin before:text-white before:rounded"
                onClick={() => setOpenSelect(!openSelect)}
            >
                <h1>{name?.label}</h1>
                <BsChevronDown
                    className=""
                />
            </span>
            <div className="bg-white rounded mt-2 flex flex-col">
                {openSelect &&

                    SortBy.map((i) =>
                        <h1 className="hover:bg-gray p-2 cursor-pointer hover:rounded z-50"
                            onClick={() => setSort(i.value)}
                            key={i.value}
                        >
                            {i.label}
                        </h1>
                    )

                }
            </div>
        </div>
    );
}