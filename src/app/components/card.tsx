import { Slice } from "lucide-react";
import { movies } from "./types";

import Link from "next/link";

export function Card({ type, movie, imageBaseUrl }: any) {
  let imgPath = movie.poster_path ?? movie.backdrop_path;

  return (
    <>
      <div className="p-5 font-[600]">
        <Link href={`/movie/${movie.id}`}>
          <div key={movie.id}>
            <img
              src={`${imageBaseUrl}${imgPath}`}
              width={160}
              height={240}
            ></img>
            <div className="bg-[#F4F4F5] ">
              <p>🌟 {movie.vote_average.toFixed(1)}/10</p>
              <h3 className="text-[14px]">{movie.title}</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
