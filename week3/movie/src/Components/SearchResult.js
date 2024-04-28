import { useEffect, useState } from "react";
import { getSearch } from "../api";
import Card from "./Card";
import SearchCard from "./SearchCard";

export default function SearchResult({ target }) {
  const [searchMovies, setSearchMovies] = useState([]);
  const getMovies = async () => {
    const result = await getSearch(target);
    setSearchMovies(result.results);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="text-white flex flex-col border-2 w-[40%] overflow-y-scroll mr-auto ml-auto max-h-[400px]">
      {searchMovies.map((movie) => {
        return <SearchCard key={movie.id} {...movie} />;
      })}
    </div>
  );
}
