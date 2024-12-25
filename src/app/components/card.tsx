import { Slice } from "lucide-react";
import { movies } from "./types";

export async function Card({ type, page }: any) {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  const res = await fetch(url, options);
  const data = await res.json();

  const movies = data.results;
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies
          .map((movie: movies) => (
            <div key={movie.id}>
              <img
                src={`${imageBaseUrl}${movie.poster_path}`}
                width={160}
                height={240}
              ></img>
              <div className="bg-[#F4F4F5] w-[160px] h-[76px] ">
                <p>🌟 {movie.vote_average.toFixed(1)}/10</p>
                <h3 className="text-[14px]">{movie.title}</h3>
              </div>
            </div>
          ))
          .slice(0, 10)}
      </div>
    </>
  );
}
