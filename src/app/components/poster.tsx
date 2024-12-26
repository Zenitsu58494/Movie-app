import { movies } from "./types";
import { LuPlay } from "react-icons/lu";

export default async function Poster() {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
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

  const nowPlaying = data.results[1];
  console.log(nowPlaying);
  return (
    <>
      {
        <div>
          <img
            src={`${imageBaseUrl}${nowPlaying.backdrop_path}`}
            className="w-full sm:h-[240px] lg:h-[600px] "
          ></img>
          <div className="w-full flex justify-center items-center">
            <div className="w-[320px]">
              <div className="flex justify-between">
                <div>
                  <div className="text-[14px]">Now Playing:</div>
                  <div className="text-[24px]">{nowPlaying.title}</div>
                </div>
                <div className="text-[18px] flex text-[#71717A]">
                  🌟{" "}
                  <div className="text-[#09090B]">
                    {nowPlaying.vote_average.toFixed(1)}
                  </div>
                  /10
                </div>
              </div>
              <div className="pt-5 text-[#09090B]">{nowPlaying.overview}</div>
              <button className="bg-[#18181B]  flex justify-center items-center rounded-md">
                <LuPlay className="text-[white] ml-2" />{" "}
                <div className="text-white p-2">Watch Trailer</div>
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}
