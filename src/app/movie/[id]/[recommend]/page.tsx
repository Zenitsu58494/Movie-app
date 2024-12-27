import { Card } from "@/app/components/card";
import { MovieType } from "@/app/components/types";
export default async function rec({ params }: any) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };
  const url = `https://api.themoviedb.org/3/movie/${params.recommend}/recommendations`;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  const res = await fetch(url, options);
  const data = await res.json();
  let movies: MovieType[] = [];
  movies = data.results;
  console.log(movies);

  return (
    <>
      <div className="p-5 font-[600]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie: MovieType) => (
            <Card key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />
          ))}
        </div>
      </div>
    </>
  );
}
