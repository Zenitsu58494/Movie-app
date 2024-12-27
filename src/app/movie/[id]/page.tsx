import { props } from "@/app/components/types";
import Creators from "@/app/components/movieCreators";
import Link from "next/link";
import { Card } from "@/app/components/card";
import { MovieType } from "@/app/components/types";
import { WiDirectionRight } from "react-icons/wi";

export default async function movie({ params }: props) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${options}&language=en-US`;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
  const genries = data.genres;
  console.log(genries);
  function convertMinute(a: number) {
    let hour = Math.trunc(a / 60);
    let minute = a % 60;
    return hour + "h" + " " + minute + "m";
  }
  const time = convertMinute(data.runtime);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/recommendations`,
    options
  );
  const resData = await response.json();
  let movies: any[];
  movies = resData.results;
  console.log(movies);

  return (
    <>
      <div>
        <div className="flex justify-between p-6">
          <div>
            <p className="text-[#09090B] font-[600] text-[24px]">
              {data.title}
            </p>
            <p className="text-[#09090B] text-[14px]">
              {data.release_date} · PG · {time}
            </p>
          </div>
          <div className="flex text-[#71717A] items-center">
            🌟
            <p className="text-[#09090B] font-bold">
              {data.vote_average.toFixed(1)}
            </p>
            /10
          </div>
        </div>
        <img
          src={`${imageBaseUrl}${data.poster_path}`}
          className="w-full sm:h-[300px] lg:h-[600px] "
        ></img>
        <div className="flex justify-between p-6 w-[400px]">
          <div>
            <img
              src={`${imageBaseUrl}${data.poster_path}`}
              width={1000}
              height={180}
            ></img>
          </div>
          <div className="pl-10">
            {genries?.map((genre: any) => (
              <span className="rounded-full h-5 border-[#E4E4E7] border-[1px] ml-4">
                {genre.name}
              </span>
            ))}

            <div className="pt-5 ">{data.overview}</div>
          </div>
        </div>
        <div className="p-6  ">
          <Creators profession="Director" name="Jon jones" />

          <Creators
            profession="Writer"
            name="Winnie Holzman ·  Dana Fox · Gregory Maguire"
          />

          <Creators
            profession="Stars"
            name="Cynthia Erivo ·  Ariana Grande · Jeff Goldblum"
          />
        </div>

        <div className="flex  items-center justify-between w-[320px] ml-5">
          <p className="text-[#09090B] text-[24px] font-[600]">
            More like this
          </p>
          <Link href={`/movie/recommend/${params.id}`}>
            <button className="flex justify-center items-center">
              See more <WiDirectionRight className="text-[30px]" />{" "}
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies
            .map((movie: MovieType) => (
              <Card key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />
            ))
            .slice(0, 2)}
        </div>
      </div>
    </>
  );
}
