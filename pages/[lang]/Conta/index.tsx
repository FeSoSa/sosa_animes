import React, { useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../db/firebaseConfig";
import Image from "next/image";
import { useRouter } from "next/router";
import ExitButton from "../../../components/Login/ExitButton";
import { Context } from "../../../contexts/ContextProvider";

export default function Conta() {

    const [user, loading] = useAuthState(auth)
    const router = useRouter()
    const {language} = useContext(Context)

    useEffect(() => {
        if (!loading && !user) {

            router.replace(`/${language}/Login`)
        }
    }, [loading, user])

    return (
        <>
            {!loading && user &&
                <main className="w-screen min-h-screen">
                    <div className="flex justify-center items-center flex-col gap-3">
                        <div>
                            <Image src={user.photoURL!} alt="User Photo" width={150} height={150} className="m-5 rounded-[50%] outline outline-white" />
                            <h1 className="text-2xl font-bold uppercase">{user.displayName}</h1>
                        </div>
                        <section className="w-full min-h-[65vh] bg-[#333333] text-center pt-2">
                            <ExitButton/>
                        </section>
                    </div>
                </main>
            }
        </>
    )
}
