import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Nav from "./Nav";
import { Context } from "../../contexts/ContextProvider";
import Head from "next/head";
import VerticalNav from "./VerticalNav";

interface Props {
    children: JSX.Element
}

export default function Layout({ children }: Props) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 768); // Defina o ponto de ruptura conforme necessário
      };

      // Execute handleResize ao inicializar e sempre que a janela for redimensionada
      handleResize();
      window.addEventListener('resize', handleResize);

      // Limpe o event listener quando o componente for desmontado
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

    return (
        <>
      <Head>
        <title>SoSa Anime</title>
        <meta
          name="description"
          content="SoSa Anime"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMobile ? <Nav /> : <VerticalNav />}
            {children}
            <Footer />
        </>
    );
}
