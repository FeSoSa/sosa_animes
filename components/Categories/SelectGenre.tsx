import { RadioGroup } from "@headlessui/react";
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { GenreByBR, GenreByEN } from "../../constants/GenreBy";
import { useRouter } from "next/router";

import { GoCheck } from 'react-icons/go'
import { CheckCircleIcon, CheckCircleFillIcon } from '@primer/octicons-react'
import { Context } from "../../contexts/ContextProvider";

interface Props {
  genre: string,
  setGenre: Dispatch<SetStateAction<string>>,
  lang: string
}

export default function SelectGenre({ genre, setGenre, lang }: Props) {

  const router = useRouter()
  const { type, page } = router.query as { type: string, page: string }
  const {language} = useContext(Context)

  const [selectedLang,setSelectedLang] = useState(GenreByBR)
  useEffect(() => {
    if(lang=='pt-BR'){
      setSelectedLang(GenreByBR)
    }else{setSelectedLang(GenreByEN)}
  },[lang,setSelectedLang,GenreByBR,GenreByEN])

  return (
    <div>
      <RadioGroup value={genre} onChange={setGenre} className="w-[14rem] max-md:w-[9rem]">
        <RadioGroup.Label>{lang == 'pt-BR' ? 'Generos:' : 'Genres:'}</RadioGroup.Label>

        {selectedLang.map((i, index) =>

          <RadioGroup.Option key={index} value={type == 'movie' ? i.movie||i.value : i.value}
            onClick={() => router.push(`/${language}}/${type}/${type == 'movie' ? i.movie||i.value : i.value}/${page}`)}
            className={`cursor-pointer flex justify-between text-md rounded items-center p-3 mt-2 hover:bg-[#FFD966]
            ${i.value == genre || i.movie == genre ? 'bg-[#222222] text-white hover:bg-[#333333]' : 'bg-white text-black'}`}
          >
            {i.name}
            {i.value == genre || i.movie == genre
              ? <CheckCircleFillIcon size={25}/>
              : <CheckCircleIcon size={25}/>
            }
          </RadioGroup.Option>

        )}
      </RadioGroup>
    </div>
  )
}
