import { useRecoilState } from "recoil";
import Search from "../Components/Search";
import { currMovieState } from "../atom";
import { getTop } from "../api";
import { useEffect } from "react";
import SearchResult from "../Components/SearchResult";

export default function Home() {
  const [movies, setMovies] = useRecoilState(currMovieState);
  const getMovies = async () => {
    const result = await getTop();
    setMovies(result);
  };
  useEffect(() => {
    getMovies();
    console.log("movies", movies);
  }, []);
  return (
    <div className="flex h-[842px] w-[100vw]">
      <div
        className="w-full h-full bg-start bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies[0].backdrop_path}})`,
        }}
      >
        <div className="absolute">
          <div className="text-white bg-gradient-to-r from-black via-black/70 to-transparent h-[842px] w-[100vw] pb-14 px-5 flex flex-col justify-center items-center">
            <span className="text-3xl">영화를 검색하세요</span>
            <div className="w-full mt-5">
              <Search />
            </div>
            <SearchResult query="Dune" />
          </div>
        </div>
      </div>
    </div>
  );
}
