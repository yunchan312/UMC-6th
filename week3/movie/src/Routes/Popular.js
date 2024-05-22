import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currMovieState, page } from "../atom";
import { getPopular } from "../api";
import Card from "../Components/Card";
import Banner from "../Components/Banner";
import Pagination from "../Components/Pagination";
import Loading from "../Components/Loading";

export default function Popular() {
  const [movies, setMovies] = useRecoilState(currMovieState);
  const [loading, setLoading] = useState(true);
  const num = useRecoilValue(page);
  const getMovies = async () => {
    setLoading(true);
    const result = await getPopular(num);
    setMovies(result);
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    getMovies();
  }, [num]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <Banner {...movies[0]} />
          </div>
          <div className="bg-black flex flex-wrap justify-center gap-5 py-5">
            {movies.map((movie, i) => (
              <Card {...movie} key={i} />
            ))}
          </div>
          <div className="py-3">
            <Pagination />
          </div>
        </div>
      )}
    </>
  );
}
