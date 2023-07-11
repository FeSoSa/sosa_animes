import { useRouter } from "next/router";
import React, { useState } from "react";
import ExploreAnime from "../../../components/Categories/ExploreAnime";
import ExploreMenu from "../../../components/Categories/ExploreMenu";
import NextPage from "../../../components/Categories/NextPage";

export default function Categorias() {

  const router = useRouter()
  const { type, genre, page } = router.query as { type: 'tv' | 'movie'; genre:string; page: string };
  const [search, setSearch] = useState('')
  const [maxPages,setMaxPages] = useState(0)
  const [sort, setSort] = useState('popularity.desc')

  return (
    <main className="bg-background w-screen min-h-screen flex flex-col">
      <header className="fixed z-10 bg-black w-screen h-[4rem] flex justify-between items-center border-b-2 border-yellow text-2xl">
       
        <div className="w-[157.48px]"/>
        <div>{type ? type.toUpperCase() : type}</div>
        <NextPage maxPages={maxPages}/>

      </header>
      <div className="flex flex-row">

        <ExploreMenu setSort={setSort} search={search} setSearch={setSearch} sort={sort} />
        <div className="flex flex-col">
          
          <ExploreAnime type={type} genre={genre} page={parseInt(page)} sort={sort} search={search} setMaxPages={setMaxPages}/>
          <aside>
            
          </aside>

        </div>
      </div>
    </main>
  )
}
