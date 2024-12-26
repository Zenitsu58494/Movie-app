import { props } from "@/app/components/types";
import Creators from "@/app/components/movieCreators";

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
      </div>
    </>
  );
}
