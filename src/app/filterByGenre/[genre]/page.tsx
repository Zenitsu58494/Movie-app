import { Card } from "@/app/components/card";

export default async function Genre({ params }: any) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${params.genre}&language=en-US&page=1;`;

  const res = await fetch(url, options);
  const data = await res.json();
  const filteredMovies = data.results;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      <p>{params.genre}</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredMovies.map((movie: any) => (
          <div>
            <Card key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />
          </div>
        ))}
      </div>
    </>
  );
}
