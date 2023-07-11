import { useRouter } from "next/router";
import React, { useState } from "react";

import {
    BsArrowLeftSquare,
    BsArrowLeftSquareFill,
    BsArrowRightSquare,
    BsArrowRightSquareFill
} from 'react-icons/bs'

interface Props{maxPages:number}

export default function NextPage({maxPages}:Props) {

    const router = useRouter()
    const { type, genre, page } = router.query as { type: string, genre:string, page: string }

    const numPage = parseInt(page)
    const [leftHandle, setLeftHandle] = useState(false)
    const [rightHandle, setRightHandle] = useState(false)

    return (
        <div className="flex flex-row p-5 gap-5 items-center">
            <div
                className="cursor-pointer text-[2rem] text-yellow"
                onMouseOver={() => setLeftHandle(true)} onMouseOut={() => setLeftHandle(false)}
                onClick={() => {numPage !== 1 && router.push(`/${type}/${genre}/${numPage - 1}`)}}
            >
                {leftHandle
                    ? <BsArrowLeftSquareFill />
                    : <BsArrowLeftSquare />
                }
            </div>

            {page}

            <div
                className="cursor-pointer text-[2rem] text-yellow"
                onMouseOver={() => setRightHandle(true)} onMouseOut={() => setRightHandle(false)}
                onClick={() => {numPage < maxPages && router.push(`/${type}/${genre}/${numPage + 1}`)}}
                >
                {rightHandle
                    ? <BsArrowRightSquareFill />
                    : <BsArrowRightSquare />
                }
            </div>
        </div>
    )
}
