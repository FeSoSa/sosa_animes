import React from "react";
import {IAnimes, IComponent} from '../../typing.d.ts'
import RowAnime from "./row/RowAnime";
import BannerHome from "./banner/BannerHome";


interface Props{
    Animes:IComponent[],
    Banner:IAnimes[]
}

export default function MainContainer({
    Animes,
    Banner
}:Props) {
  return (
    <main>  
        <BannerHome Banner={Banner}/>
        <div style={{marginTop:-220}}>
          {Animes.map(i => <RowAnime items={i[0]} key={i[1]} title={i[1]}/>)}
        </div>
    </main>
  )
}
