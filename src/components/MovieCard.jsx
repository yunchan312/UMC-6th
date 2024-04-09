import { useState } from "react";

export default function MovieCard({
  original_title,
  poster_path,
  vote_average,
  overview,
}) {
  const [isMouse, setIsMouse] = useState(false);
  const onMouse = () => {
    setIsMouse((prev) => (prev = !prev));
  };
  return (
    <div
      className="border-2 border-red-500 h-[500px]"
      onMouseEnter={onMouse}
      onMouseLeave={onMouse}
    >
      <div>
        {isMouse ? (
          <div className="no-scrollbar select-none w-[250px] h-[375px] bg-black bg-opacity-50 overflow-y-scroll absolute p-1">
            {overview}
          </div>
        ) : null}
        <img
          className="w-[250px]"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        />
      </div>
      <div className="py-5 px-2 w-[250px] flex flex-col justify-center">
        <div>{original_title}</div>
        <div>⭐{vote_average}</div>
      </div>
    </div>
  );
}
