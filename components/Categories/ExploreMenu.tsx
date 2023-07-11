import React, { Dispatch, SetStateAction } from "react";
import SelectSort from "./SelectSort";

interface Props {
  setSort: Dispatch<SetStateAction<string>>,
  sort: string
  search: string,
  setSearch: Dispatch<SetStateAction<string>>
}

export default function ExploreMenu({sort, setSort, search, setSearch }: Props) {
  return (
    <aside className="fixed  bg-yellow w-[36vh] h-[90vh] mt-[9.5vh] items-center gap-3 flex flex-col">
      <input
        className="bg-white text-black text-xl h-[3.5rem] w-[14rem] rounded mt-2 outline-none p-2 text-wrap flex overflow-auto"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        alt="Search Anime"
        placeholder="Procurar"
      />
      <SelectSort setSort={setSort} sort={sort}/>

    </aside>
  )
}
