import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currMovieState } from "../atom";
import { getPopular } from "../api";
import Card from "../Components/Card";

export default function Popular() {
  const [movies, setMovies] = useRecoilState(currMovieState);
  const getMovies = async () => {
    const result = await getPopular();
    setMovies(result);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="px-2">
      <div>
        {movies.map((movie) => (
          <Card {...movie} />
        ))}
      </div>
    </div>
  );
}
