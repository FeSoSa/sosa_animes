import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebaseConfig";
import Image from "next/image";
import { useRouter } from "next/router";
import ExitButton from "../../components/Login/ExitButton";

export default function index() {

    const [user, loading] = useAuthState(auth)
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {

            router.replace('/Login')
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
