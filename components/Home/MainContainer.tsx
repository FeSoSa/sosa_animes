import { useEffect, useState } from "react";
import { IAnimes, IComponent } from "../../typing.d.ts";
import BannerHome from "./banner/BannerHome";
import Highlight from "./row/Highlight";
import RowAnime from "./row/RowAnime";

interface Props {
  animes: IComponent[];
  banner: IAnimes[];
}

export default function MainContainer({ animes, banner }: Props) {
  const [itemRand1, setItemRand1] = useState<IAnimes>();
  const [itemRand2, setItemRand2] = useState<IAnimes>();

  const [rand3, setRand3] = useState("");
  const [itemRand3, setItemRand3] = useState<IAnimes>();

  useEffect(() => {
    const filter1 = animes[0][0].filter((item) => item.backdrop_path);
    setItemRand1(animes[0][0][Math.floor(Math.random() * animes[0][0].length)]);

    const filter2 = animes[6][0].filter((item) => item.backdrop_path);
    setItemRand2(animes[6][0][Math.floor(Math.random() * animes[6][0].length)]);

    const thirdArray = animes.slice(1, -1);
    const thirdRand = thirdArray[Math.floor(Math.random() * thirdArray.length)];
    setRand3(thirdRand[1]);
    setItemRand3(thirdRand[0][Math.floor(Math.random() * thirdRand[0].length)]);
  }, [animes]);

  return (
    <main>
      <BannerHome banner={banner} />
      <div className="mt-[-110px] max-md:mt-[-250px]">
        <RowAnime
          items={animes[0][0]}
          key={animes[0][1]}
          title={animes[0][1]}
          style={"G"}
        />{" "}
        {/* Em Destaque */}
        <div className="flex justify-center p-5">
          <Highlight anime={itemRand1} title="Recomendados" />
        </div>
        <RowAnime
          items={animes[1][0]}
          key={animes[1][1]}
          title={animes[1][1]}
          style={"M"}
        />{" "}
        {/* Ação e Aventura */}
        <RowAnime
          items={animes[2][0]}
          key={animes[2][1]}
          title={animes[2][1]}
          style={"M"}
        />{" "}
        {/* Drama */}
        <div className="flex justify-center p-5">
          <Highlight anime={itemRand2} title="Filmes em alta" />
        </div>
        <RowAnime
          items={animes[3][0]}
          key={animes[3][1]}
          title={animes[3][1]}
          style={"M"}
        />{" "}
        {/* Comédia */}
        <RowAnime
          items={animes[4][0]}
          key={animes[4][1]}
          title={animes[4][1]}
          style={"M"}
        />{" "}
        {/* Ficção */}
        <div className="flex justify-center p-5">
          <Highlight anime={itemRand3} title={`Para quem ama ${rand3}`} />
        </div>
        <RowAnime
          items={animes[5][0]}
          key={animes[5][1]}
          title={animes[5][1]}
          style={"M"}
        />{" "}
        {/* Mistério */}
        <RowAnime
          items={animes[6][0]}
          key={animes[6][1]}
          title={animes[6][1]}
          style={"M"}
        />{" "}
        {/* Filmes */}
      </div>
    </main>
  );
}
