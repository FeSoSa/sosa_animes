import React, { useContext } from "react";
import { auth } from "../../db/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { Context } from "../../contexts/ContextProvider";

export default function ExitButton() {

    const {translation,language} = useContext(Context)
    const router = useRouter()
    const Exit = async () => {
        signOut(auth).then(() => {
            router.push(`${language}/Login`)
        }).catch((error) => {
            console.log(`Unable to log out:${error}`)
        });
    }

    return (
        <button onClick={Exit} className="bg-red p-2 rounded-md hover:scale-105">
            {translation.geral.exit}
        </button>
    )
}
