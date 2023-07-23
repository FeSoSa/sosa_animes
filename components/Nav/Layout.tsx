import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Nav from "./Nav";
import { Context } from "../../contexts/ContextProvider";
import Head from "next/head";

interface Props {
    children: JSX.Element
}

export default function Layout({ children }: Props) {

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
            <Nav />
            {children}
            <Footer />
        </>
    );
}
