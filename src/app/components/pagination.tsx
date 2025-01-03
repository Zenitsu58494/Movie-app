"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { PageInfo } from "next/dist/build/utils";

const getVisiblePage = (currentPage: number) => {
  if (currentPage < 3) {
    return [1, 2, 3, 4, 5];
  }
  return [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
};

export default function Pagination({ pageInfo }: { pageInfo: any }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const ChangePage = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPage.toString());
    const newURl = pathname + "?" + newSearchParams.toString();
    router.push(newURl);
  };
  const lastPage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalPages;
  const visiblePages = getVisiblePage(pageInfo.currentPage);
  return (
    <>
      <div className="flex gap-5">
        {pageInfo.currentPage > 1 && (
          <button onClick={() => ChangePage(pageInfo.currentPage - 1)}>
            Prev
          </button>
        )}

        {visiblePages.map((page) => (
          <div
            onClick={() => ChangePage(page)}
            className={pageInfo.currentPage === page ? "font-semibold" : ""}
            key={page}
          >
            {page}
          </div>
        ))}
        {pageInfo.currentPage < lastPage && (
          <button onClick={() => ChangePage(pageInfo.currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </>
  );
}
