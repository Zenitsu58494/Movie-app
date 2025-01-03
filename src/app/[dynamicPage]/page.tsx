"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieType, pageInfo } from "../components/types";
import { Card } from "../components/card";
import Pagination from "../components/pagination";
import { PageInfo } from "next/dist/build/utils";

export default function Page() {
  const params = useParams();
  const [movies, setMovies] = useState<any[]>();
  const [pageInfo, setPageInfo] = useState<pageInfo>({
    totalPages: 0,
    currentPage: 0,
  });
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/${params.dynamicPage}?language=en-US&page=1${page};`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
        },
      };

      let movies: MovieType[] = [];

      const res = await fetch(url, options);
      const data = await res.json();
      setMovies(data.results);
      setPageInfo({ currentPage: Number(page), totalPages: data.total_pages });
    };
    fetchMovies();
  }, [params]);
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies?.map((movie: MovieType) => (
          <Card key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />
        ))}
      </div>
      <Pagination pageInfo={pageInfo} />
    </>
  );
}
