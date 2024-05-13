import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import useDebounce from "../Utility/useDebounce";

export default function Search({ movies }) {
  const [num, setNum] = useState(0);
  const [target, setTarget] = useState("");
  const debouncedValue = useDebounce(target, 200);
  const onChange = (e) => {
    setTarget(e.target.value);
  };
  const controlNum = (prev) => {
    if (prev + 1 >= 20) {
      return 0;
    } else {
      return prev + 1;
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setNum((prev) => controlNum(prev));
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div
      className={`w-[100vw] h-full text-center bg-cover bg-start`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movies[num].backdrop_path})`,
      }}
    >
      <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent animate-fadeOut" />
      <form className="h-full relative bottom-10 z-10 flex flex-col justify-center items-center gap-5">
        <div className="text-white text-[40px]">찾고싶은 영화를 검색하세요</div>
        <input
          type="text"
          className="border-2 border-black text-black rounded-full px-4 py-2 w-[40%] focus:border-logo focus:outline-none"
          placeholder="Type here"
          onChange={onChange}
        />
        <input type="submit" value="search" className="hidden" />
        <div className="w-full">
          <SearchResult target={debouncedValue} />
        </div>
      </form>
    </div>
  );
}
