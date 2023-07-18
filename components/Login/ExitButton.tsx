import React from "react";
import { auth } from "../../utils/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function ExitButton() {

    const router = useRouter()
    const Exit = async () => {
        signOut(auth).then(() => {
            router.push('/Login')
        }).catch((error) => {
            console.log(`Unable to log out:${error}`)
        });
    }

    return (
        <button onClick={Exit} className="bg-red p-2 rounded-md hover:scale-105">
            SAIR
        </button>
    )
}
