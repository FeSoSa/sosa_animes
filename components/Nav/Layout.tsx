import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Nav from "./Nav";
import { Context } from "../../contexts/ContextProvider";
import OpenNav from "./OpenNav";

interface Props {
    children: JSX.Element
}

export default function Layout({ children }: Props) {

    return (
        <>
            <OpenNav/>
            <Nav />
            <>{children}</>
            <Footer />
        </>
    );
}
