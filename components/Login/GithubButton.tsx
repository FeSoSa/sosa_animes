import Image from "next/image";
import React, { useContext } from "react";

import github from '../../public/assets/github.png'
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

import { useRouter } from "next/router";
import { auth } from "../../db/firebaseConfig";
import { Context } from "../../contexts/ContextProvider";
const provider = new GithubAuthProvider()

export default function GithubButton() {

  const router = useRouter()
  const {translation,language} = useContext(Context)

  const LoginWithGitHub = async () => {
    try {
      signInWithPopup(auth, provider)
        .then( (res) => res.user && router.push(`/${language}`).catch( (err) => {console.log(err)} ) )
    } catch (error: any) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);

      console.error({ errorCode, errorMessage, email, credential });
    }
  }

  return(
    <button onClick={LoginWithGitHub} className="flex flex-row items-center bg-white text-black rounded-md p-2 gap-1 outline-none hover:scale-105">
        <Image src={github} alt="GitHub Icon" height={0} width={0} style={{width:'25px', height:'auto'}}/>
        <h2 className="text-[14px] font-medium">{translation.login.github}</h2>
    </button>    
)
}
