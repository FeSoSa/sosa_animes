import Link from "next/link";
import { useContext } from "react";
import { Context } from "../contexts/ContextProvider";

export default function Custom404() {
  const { language } = useContext(Context);

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold">
        Parece que você se perdeu no limbo dos Animes :O
      </h1>
      <p>
        Vamos voltar?{" "}
        <Link href={`/${language}`} className="text-yellow font-bold">
          clique aqui
        </Link>
      </p>
    </div>
  );
}
