import Image from "next/image";
import React from "react";

import Icon from '../../public/assets/AnimeIcon.png'

export default function Loading() {
  return(
    <div className="w-screen h-screen flex justify-center items-center animate-bounce">
      <Image src={Icon} alt="Logo" width={0} height={0} />
    </div>
  )
}
