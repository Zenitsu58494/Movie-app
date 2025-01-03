"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import Link from "next/link";
import { useState, useEffect } from "react";
import { genre } from "./types";

export default function FilterGenre() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const url = `https://api.themoviedb.org/3/genre/movie/list?language=en;`;
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
      setGenres(data.genres);
    };

    fetchGenres();
  }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex justify-center items-center rounded-md border-[2px] border-[#E4E4E7] pl-3 pr-3 pt-1 pb-1">
          ˅
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="bg-white border-[1px] border-[#E4E4E7] m-5 rounded-sm">
          <div className="p-5">
            <p className="text-[24px] text-[#09090B] font-inter font-[600]">
              Genres
            </p>
            <p>See lists of movies by genre</p>
          </div>
          <div className="grid grid-cols-3 ml-[10px] mr-[30px]">
            {genres.map((genre: genre) => (
              <Link key={genre.id} href={`/filterByGenre/${genre.id}`}>
                <span className="rounded-full border-[#E4E4E7] border-[1px] p-2 m-1">
                  {genre.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
