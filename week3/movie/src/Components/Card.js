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
    <div>
      <div
        onClick={onClick}
        onMouseEnter={onMouse}
        onMouseLeave={onMouse}
        className="overflow-hidden text-ellipsis h-[400px] bg-black w-[200px] border-2 border-logo mb-5"
      >
        {isMouse ? (
          <div className="text-white absolute w-[196px] h-[300px] p-2 bg-black overflow-y-scroll no-scrollbar select-none cursor-pointer">
            {overview === "" ? "제공된 줄거리가 없습니다." : overview}
          </div>
        ) : null}
        <img
          className="h-[294px]"
          alt="card"
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
        />

        <div className="my-5">
          <div className="text-white">⭐{vote_average.toFixed(1)}</div>
          <div className="text-white">{title}</div>
        </div>
      </div>
    </div>
  );
}
