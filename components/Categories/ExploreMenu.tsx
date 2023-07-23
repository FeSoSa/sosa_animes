import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import SelectSort from "./SelectSort";
import SelectGenre from "./SelectGenre";
import { Translations } from "../../constants/Translations";
import { Context } from "../../contexts/ContextProvider";

interface Props {
  setSort: Dispatch<SetStateAction<string>>,
  sort: string
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
  genre:string,
  setGenre:Dispatch<SetStateAction<string>>
}

export default function ExploreMenu({sort, setSort, search, setSearch,  genre, setGenre}: Props) {

    const {translation} = useContext(Context)
  return (
    <aside className="fixed  bg-yellow w-[36vh] h-[90vh] mt-[9.5vh] items-center gap-3 flex flex-col
    max-md:w-[20vh]
    ">
      <input
        className="bg-white text-black text-xl h-[3.5rem] w-[14rem] rounded mt-2 
        outline-none p-2 text-wrap flex overflow-auto
        max-md:w-[9rem]
        "
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        alt="Search Anime"
        placeholder={ translation.lang == 'pt-BR' ? 'Procurar' : 'Search' }
      />
      <SelectSort setSort={setSort} sort={sort} lang={translation.lang}/>
      <SelectGenre setGenre={setGenre} genre={genre} lang={translation.lang}/>
    </aside>
  )
}
