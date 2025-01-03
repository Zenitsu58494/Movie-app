"use client";
import { IoIosSearch } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { MdOutlineLocalMovies } from "react-icons/md";
import FilterGenre from "./filter";
import { useState } from "react";
import Search from "./search";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const toggle = () => {
    setShowSearch(true);
  };

  return (
    <>
      <div className="w-full flex bg-white justify-between">
        <div>
          {!showSearch && (
            <p className="text-[#4338CA] font-bold text-[20px] pl-5 flex items-center">
              <MdOutlineLocalMovies />
              Movie Z
            </p>
          )}
          {showSearch && (
            <div className="flex justify-center items-center gap-4 h-[60px] ">
              <FilterGenre />
              <div className="flex gap-2">
                {" "}
                <input
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="search"
                  className="border-[1px] border-black rounded-sm h-[50px] "
                />
                <button
                  onClick={() => {
                    setShowSearch(false);
                    setQuery("");
                  }}
                >
                  x
                </button>
              </div>
            </div>
          )}
          <Search value={query} />
        </div>

        {!showSearch && (
          <div className="flex pr-5 gap-3">
            <button
              onClick={toggle}
              className="rounded-md w-9 h-9 border-[#E4E4E7] border-[1px] flex justify-center items-center"
            >
              <IoIosSearch />
            </button>
            <div className="rounded-md w-9 h-9 border-[#E4E4E7] border-[1px] flex justify-center items-center">
              <FiMoon />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
