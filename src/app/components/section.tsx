import { Card } from "./card";
import { MovieType } from "./types";

export default async function Section({ type }: any) {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  let movies: MovieType[] = [];

  const res = await fetch(url, options);
  const data = await res.json();

  movies = data.results;

  return (
    <>
      <div className="p-5 font-[600]">
        <div className="flex justify-between items-center">
          <p className="text-[#09090B] text-[24px]">{type}</p>
          <a href={`/${type}`}>view all</a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.length > 0 ? (
            movies.map((movie: MovieType) => (
              <Card
                key={movie.id}
                movie={movie}
                type={type}
                imageBaseUrl={imageBaseUrl}
              />
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>
    </>
  );
}
