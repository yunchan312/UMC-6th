import MovieCard from "./components/MovieCard";
import { movies } from "./API/movieLists";

export default function Movie() {
  return (
    <div className="bg-black text-white flex flex-wrap justify-center items-center gap-4 py-10">
      {movies.results.map((movie, i) => {
        return <MovieCard key={i} {...movie} />;
      })}
    </div>
  );
}
