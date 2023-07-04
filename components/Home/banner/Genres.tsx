import React from "react";
import { movieGenres, tvGenres } from "../../../constants/genres";

interface Props {
    genres: number[],
    mediaType: 'tv' | 'movie'
}

export default function Genres({ genres, mediaType }: Props) {
    return (
        <>
            {genres && genres.length > 0 && (
                <div className="flex justify-center sm:justify-start gap-1">
                    {genres.map((item, i, arr) => (
                        <span key={i} className="text-yellow font-bold" style={{lineHeight:1}}>
                            {`${mediaType === "movie"
                                    ? movieGenres[item].name
                                    : tvGenres[item].name
                                }${i !== arr.length - 1 && arr.length > 1 ? ` | ` : ""}`}
                        </span>
                    ))}
                </div>
            )}
        </>
    )
}
