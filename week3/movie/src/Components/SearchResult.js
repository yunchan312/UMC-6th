import { useEffect, useState } from "react";
import { getSearch } from "../api";

export default function SearchResult({ query }) {
  const [searchMovies, setSearchMovies] = useState([]);
  const getMovies = async () => {
    const result = await getSearch(query);
    console.log(result);
  };
  useEffect(() => {
    getMovies(query);
  }, []);
  return <div className="text-white"></div>;
}
