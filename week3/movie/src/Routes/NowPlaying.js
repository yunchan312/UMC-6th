import { useRecoilState } from "recoil";
import { currMovieState } from "../atom";
import { getNow } from "../api";
import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import NowPlayingCard from "../Components/NowPlayingCard";

export default function NowPlaying() {
  const [movies, setMovies] = useRecoilState(currMovieState);
  const [num, setNum] = useState(1);

  const getMovies = async () => {
    const result = await getNow(num);
    setMovies(result.slice(0, 16));
  };

  useEffect(() => {
    getMovies();
  }, [num]);

  return (
    <div>
      <div>
        <Banner {...movies[0]} />
      </div>

      <div>
        <NowPlayingCard />
      </div>
    </div>
  );
}
