import { useRecoilState } from "recoil";
import Search from "../Components/Search";
import { currMovieState } from "../atom";
import { getTop } from "../api";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

export default function Home() {
  const [movies, setMovies] = useRecoilState(currMovieState);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const result = await getTop();
    setMovies(result);
    setTimeout(setLoading(false), 2000);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex overflow-hidden h-[100vh]">
          <Search movies={movies} />
        </div>
      )}
    </>
  );
}
