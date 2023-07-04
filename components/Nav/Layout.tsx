import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Nav from "./Nav";
import { Context } from "../../contexts/ContextProvider";

interface Props {
    children: JSX.Element
}

export default function Layout({ children }: Props) {

    return (
        <>
            
            <Nav />
            <>{children}</>
            <Footer />
        </>
    );
}
