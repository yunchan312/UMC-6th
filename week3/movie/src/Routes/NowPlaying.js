import { useRecoilState } from "recoil";
import { currMovieState } from "../atom";
import { getNow } from "../api";
import { useEffect } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";

export default function NowPlaying() {
  const [movies, setMovies] = useRecoilState(currMovieState);
  const getMovies = async () => {
    const result = await getNow();
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
        {movies.map((movie) => (
          <Card {...movie} />
        ))}
      </div>
    </div>
  );
}
