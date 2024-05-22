import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "./Loading";
import Card from "./Card";

const API_KEY = "df298b7fcfd4e5ab46610192dc9adee7";

export default function NowPlayingCard() {
  const fetchProjects = async ({ pageParam = 1 }) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&watch_region=KR&language=ko&page=${pageParam}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      return res.json();
    } catch (error) {
      throw new Error("Failed to fetch projects");
    }
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });

  return (
    <>
      {status === "loading" && (
        <div>
          <Loading />
        </div>
      )}
      {status === "error" && <p>Error: {error.message}</p>}
      {status === "success" && (
        <>
          {data.pages.map((page, i) => (
            <div
              className="flex flex-wrap gap-5 justify-center items-center py-5"
              key={i}
            >
              {page.results.slice(0, 16).map((movie) => (
                <Card key={movie.id} {...movie} />
              ))}
            </div>
          ))}
          <div>
            <div
              className="pb-5 flex items-center justify-center"
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage ? (
                <>
                  <Loading />
                </>
              ) : hasNextPage ? (
                <div className="hover:bg-logo cursor-pointer border-2 border-white w-10 h-10 rounded-full font-bold text-black bg-white text-center flex justify-center items-center">
                  <span>&darr;</span>
                </div>
              ) : (
                "Nothing more to load"
              )}
            </div>
          </div>
          <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
        </>
      )}
    </>
  );
}
