import { useEffect, useState } from "react";
import { getSearch } from "../api";
import SearchCard from "./SearchCard";
import Loading from "./Loading";
import { ClimbingBoxLoader } from "react-spinners";

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
  }, [target]);
  return (
    <div className="no-scrollbar text-white w-[80%] overflow-y-scroll mr-auto ml-auto h-[500px]">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-[500px]">
          <ClimbingBoxLoader color="#de0913" size={20} />
          <div>searching...</div>
        </div>
      ) : (
        <div className="flex gap-4 flex-wrap ">
          {searchMovies.map((movie) => {
            return <SearchCard key={movie.id} {...movie} />;
          })}
        </div>
      )}
    </div>
  );
}
