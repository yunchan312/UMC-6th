import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Card({
  poster_path,
  title,
  vote_average,
  overview,
  id,
}) {
  const [isMouse, setIsMouse] = useState(false);
  const navigate = useNavigate();
  const onMouse = () => {
    setIsMouse((prev) => (prev = !prev));
  };
  const onClick = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouse}
      onMouseLeave={onMouse}
      className="h-[400px] bg-black w-[200px] border-2 border-logo"
    >
      {isMouse ? (
        <div className="text-white absolute w-[196px] h-[300px] p-2 bg-black overflow-y-scroll no-scrollbar select-none cursor-pointer">
          {overview}
        </div>
      ) : null}
      <img
        className="h-[294px]"
        src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
      />

      <div className="my-5">
        <div className="text-white">⭐{vote_average.toFixed(1)}</div>
        <div className="text-white">{title}</div>
      </div>
    </div>
  );
}
