import React, { useEffect, useState } from "react";
import { IAnimes, IComponent } from '../../typing.d.ts'
import RowAnime from "./row/RowAnime";
import BannerHome from "./banner/BannerHome";
import Highlight from "./row/Highlight";


interface Props {
  Animes: IComponent[],
  Banner: IAnimes[]
}

export default function MainContainer({
  Animes,
  Banner
}: Props) {

  const [itemRand1, setItemRand1] = useState<IAnimes>()
  const [itemRand2, setItemRand2] = useState<IAnimes>()

  const [rand3, setRand3] = useState("")
  const [itemRand3, setItemRand3] = useState<IAnimes>()

  useEffect(() => {
    const filter1 = Animes[0][0].filter(item => item.backdrop_path);
    setItemRand1(Animes[0][0][Math.floor(Math.random() * Animes[0][0].length)])

    const filter2 = Animes[6][0].filter(item => item.backdrop_path);
    setItemRand2(Animes[6][0][Math.floor(Math.random() * Animes[6][0].length)])

    const thirdArray = Animes.slice(1, -1);
    const thirdRand = thirdArray[Math.floor(Math.random() * thirdArray.length)];
    setRand3(thirdRand[1])
    setItemRand3(thirdRand[0][Math.floor(Math.random() * thirdRand[0].length)])
  }, [Animes])


  return (
    <main>
      <BannerHome Banner={Banner} />
      <div className="mt-[-110px] max-md:mt-[-250px]">
        <RowAnime items={Animes[0][0]} key={Animes[0][1]} title={Animes[0][1]} style={"G"} /> {/* Em Destaque */}
        <div className="flex justify-center p-5">
          <Highlight anime={itemRand1} title="Recomendados" />
        </div>
        <RowAnime items={Animes[1][0]} key={Animes[1][1]} title={Animes[1][1]} style={"M"} /> {/* Ação e Aventura */}
        <RowAnime items={Animes[2][0]} key={Animes[2][1]} title={Animes[2][1]} style={"M"} /> {/* Drama */}
        <div className="flex justify-center p-5">
          <Highlight anime={itemRand2} title="Filmes em alta" />
        </div>
        <RowAnime items={Animes[3][0]} key={Animes[3][1]} title={Animes[3][1]} style={"M"} /> {/* Comédia */}
        <RowAnime items={Animes[4][0]} key={Animes[4][1]} title={Animes[4][1]} style={"M"} /> {/* Ficção */}
        <div className="flex justify-center p-5">
          <Highlight anime={itemRand3} title={`Para quem ama ${rand3}`} />
        </div>
        <RowAnime items={Animes[5][0]} key={Animes[5][1]} title={Animes[5][1]} style={"M"} /> {/* Mistério */}
        <RowAnime items={Animes[6][0]} key={Animes[6][1]} title={Animes[6][1]} style={"M"} /> {/* Filmes */}
      </div>
    </main>
  )
}
