import { RadioGroup } from "@headlessui/react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { GenreBy } from "../../constants/GenreBy";
import { useRouter } from "next/router";

import { GoCheck } from 'react-icons/go'
import { CheckCircleIcon, CheckCircleFillIcon } from '@primer/octicons-react'

interface Props {
  genre: string,
  setGenre: Dispatch<SetStateAction<string>>
}

export default function SelectGenre({ genre, setGenre }: Props) {

  const router = useRouter()
  const { type, page } = router.query as { type: string, page: string }

  return (
    <div>
      <RadioGroup value={genre} onChange={setGenre} className="w-[14rem]">
        <RadioGroup.Label>Generos:</RadioGroup.Label>

        {GenreBy.map((i, index) =>

          <RadioGroup.Option key={index} value={type == 'movie' ? i.movie||i.value : i.value}
            onClick={() => router.push(`/${type}/${type == 'movie' ? i.movie||i.value : i.value}/${page}`)}
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
