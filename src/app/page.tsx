import { Card } from "./components/card";
import Header from "./components/header";
import Poster from "./components/poster";

export default async function Home() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
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
  console.log(data.results);

  const movies = data.results;

  return (
    <div>
      <Header />
      <Poster />
      <Card movies={movies} />
    </div>
  );
}
