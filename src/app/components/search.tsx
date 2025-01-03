"use client";
import { useState, useEffect } from "react";
import { Card } from "./card";

export default function Search({ value }: { value: string }) {
  const [movies, setMovies] = useState([]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    if (!value) {
      setMovies([]);
    }

    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${value}&language=en-US&page=1;`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [value]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 bg-gray-200 fixed">
        {movies
          .map((movie: any) => (
            <Card movie={movie} imageBaseUrl={imageBaseUrl} key={movie.id} />
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
}
