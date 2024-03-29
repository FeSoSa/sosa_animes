import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import ExploreAnime from "../../../../components/Categories/ExploreAnime";
import ExploreMenu from "../../../../components/Categories/ExploreMenu";
import NextPage from "../../../../components/Categories/NextPage";
import { Context } from "../../../../contexts/ContextProvider";

export default function Categorias() {

  const router = useRouter()
  const { type, genreParam, page } = router.query as { type: 'tv' | 'movie'; genreParam:string; page: string };
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState<string>('geral')
  const [maxPages,setMaxPages] = useState(0)
  const [sort, setSort] = useState('popularity.desc')
  const {translation} = useContext(Context)

  return (
    <main className="bg-background w-screen min-h-screen flex flex-col ">
      <header className="fixed z-10 bg-black w-screen flex justify-between items-center border-b-2 border-yellow text-2xl pt-[60px] max-md:pt-0">
       
        <div className="w-[157.48px]"/>
        <div>{type ? type.toUpperCase() : type}</div>
        <NextPage maxPages={maxPages}/>

      </header>
      <div className="flex flex-row">

        <ExploreMenu setGenre={setGenre} genre={genre} setSort={setSort} search={search} setSearch={setSearch} sort={sort}/>
        <div className="flex flex-col">
          
          <ExploreAnime type={type} genre={genre} page={parseInt(page)} sort={sort} search={search} lang={translation.lang} setMaxPages={setMaxPages}/>
          <aside>
            
          </aside>

        </div>
      </div>
    </main>
  )
}
