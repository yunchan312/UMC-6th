import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currMovieState } from "../atom";
import { getUpcoming } from "../api";
import Card from "../Components/Card";
import Banner from "../Components/Banner";

export default function Upcoming() {
  const [movies, setMovies] = useRecoilState(currMovieState);
  const getMovies = async () => {
    const result = await getUpcoming();
    setMovies(result);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <div>
        <Banner {...movies[0]} />
      </div>
      <div className="bg-black flex flex-wrap justify-center gap-5 py-5">
        {movies.map((movie, i) => (
          <Card {...movie} key={i} />
        ))}
      </div>
    </div>
  );
}
