import React from "react";
import { IoIosStarOutline,IoIosStarHalf,IoIosStar } from 'react-icons/io';
import { IconContext } from "react-icons/lib";

interface Props {
    stars: number
}

export default function Stars({ stars }: Props) {



    return (
        <div className="flex flex-row inline-block">
            <IconContext.Provider value={{className:'text-yellow'}}>
            {stars <= 0 ? <><IoIosStarOutline/><IoIosStarOutline/><IoIosStarOutline/><IoIosStarOutline/><IoIosStarOutline/></>
            :stars >= 1 && stars < 2.5 ? <><IoIosStarHalf/><IoIosStarOutline/><IoIosStarOutline/><IoIosStarOutline/><IoIosStarOutline/></>
            :stars >= 2 && stars < 3.5 ? <><IoIosStar/><IoIosStarOutline/><IoIosStarOutline/><IoIosStarOutline/><IoIosStarOutline/></>
            :stars >= 3 && stars < 4.5 ? <><IoIosStar/><IoIosStarHalf/><IoIosStarOutline/><IoIosStarOutline/><IoIosStarOutline/></>
            :stars >= 4 && stars < 5.5 ? <><IoIosStar/><IoIosStar/><IoIosStarOutline/><IoIosStarOutline/><IoIosStarOutline/></>
            :stars >= 5 && stars < 6.5 ? <><IoIosStar/><IoIosStar/><IoIosStarHalf/><IoIosStarOutline/><IoIosStarOutline/></>
            :stars >= 6 && stars < 7.5 ? <><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStarOutline/><IoIosStarOutline/></>
            :stars >= 7 && stars < 8.5 ? <><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStarHalf/><IoIosStarOutline/></>    
            :stars >= 8 && stars < 9 ? <><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStarOutline/></>
            :stars >= 9 && stars < 10 ? <><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStarHalf/></>        
            :<><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></>
        }
            </IconContext.Provider>
        </div>
    );
}