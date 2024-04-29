import { useEffect, useState } from "react";
import { getSearch } from "../api";
import SearchCard from "./SearchCard";
import Loading from "./Loading";

export default function SearchResult({ target }) {
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    setLoading(true);
    const result = await getSearch(target);
    setSearchMovies(result.results);
    setTimeout(setLoading(false), 2000);
  };
  useEffect(() => {
    getMovies();
    console.log(searchMovies);
  }, [target]);
  return (
    <div className="text-white flex flex-col w-[40%] overflow-y-scroll mr-auto ml-auto max-h-[400px]">
      {loading ? (
        <Loading />
      ) : (
        searchMovies.map((movie) => {
          return <SearchCard key={movie.id} {...movie} />;
        })
      )}
    </div>
  );
}
