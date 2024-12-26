import { creators } from "./types";
export default function Creators({ profession, name }: creators) {
  return (
    <>
      <div className="flex gap-16 items-center mt-5">
        {" "}
        <p className="text-[16px] font-[700] text-[#09090B]">{profession}</p>
        <p className="text-[#09090B] text-[16px]">{name}</p>
      </div>

      <div className="h-[1px] bg-gray-500 mt-2 "></div>
    </>
  );
}
