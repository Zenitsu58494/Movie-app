"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Pagination({}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const ChangePage = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPage.toString());
    const newURl = pathname + "?" + newSearchParams.toString();
    router.push(newURl);
  };
  return (
    <>
      <div className="flex gap-10">
        <button onClick={() => ChangePage(2)}>2</button>
        <button onClick={() => ChangePage(3)}>3</button>
        <button onClick={() => ChangePage(4)}>4</button>
      </div>
    </>
  );
}
