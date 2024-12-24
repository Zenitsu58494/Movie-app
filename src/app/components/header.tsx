import { IoIosSearch } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { MdOutlineLocalMovies } from "react-icons/md";

export default function Header() {
  return (
    <>
      <div className="w-full flex bg-white justify-between">
        <p className="text-[#4338CA] font-bold text-[20px] pl-5 flex items-center">
          <MdOutlineLocalMovies />
          Movie Z
        </p>
        <div className="flex pr-5 gap-3">
          <div className="rounded-md w-9 h-9 border-[#E4E4E7] border-[1px] flex justify-center items-center">
            <IoIosSearch />
          </div>
          <div className="rounded-md w-9 h-9 border-[#E4E4E7] border-[1px] flex justify-center items-center">
            <FiMoon />
          </div>
        </div>
      </div>
    </>
  );
}
