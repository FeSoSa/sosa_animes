import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

import {
    BsArrowLeftSquare,
    BsArrowLeftSquareFill,
    BsArrowRightSquare,
    BsArrowRightSquareFill
} from 'react-icons/bs'
import { Context } from "../../contexts/ContextProvider";

interface Props{maxPages:number}

export default function NextPage({maxPages}:Props) {

    const router = useRouter()
    const {lang, type, genre, page } = router.query as { lang:string, type: string, genre:string, page: string }

    const numPage = parseInt(page)
    const [leftHandle, setLeftHandle] = useState(false)
    const [rightHandle, setRightHandle] = useState(false)
    const {language} = useContext(Context)

    return (
        <div className="flex flex-row p-5 gap-5 items-center">
            <div
                className="cursor-pointer text-[2rem] text-yellow"
                onMouseOver={() => setLeftHandle(true)} onMouseOut={() => setLeftHandle(false)}
                onClick={() => {numPage !== 1 && router.push(`/${lang}/${type}/${genre}/${numPage - 1}`)}}
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
                onClick={() => {numPage < maxPages && router.push(`/${language}/${type}/${genre}/${numPage + 1}`)}}
                >
                {rightHandle
                    ? <BsArrowRightSquareFill />
                    : <BsArrowRightSquare />
                }
            </div>
        </div>
    )
}
