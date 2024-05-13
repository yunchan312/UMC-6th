import { useNavigate } from "react-router-dom";

export default function SearchCard({
  id,
  title,
  release_date,
  vote_average,
  poster_path,
}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/detail/${id}`)}
      className="w-[200px] mr-auto ml-auto flex-col hover:border-2 hover:border-logo bg-[rgba(0,0,0,.8)] flex justify-between cursor-pointer"
    >
      <div className="flex flex-col">
        {poster_path ? (
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          />
        ) : (
          <img
            className="w-full py-[60px]"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"
            }
          />
        )}
        <div className="px-2 text-xl max-w-[400px] h-8 text-ellipsis overflow-hidden font-bold self-start">
          {title}
        </div>
        {vote_average ? (
          <div className="px-2 self-start">⭐{vote_average.toFixed(1)}</div>
        ) : (
          <div className="text-start px-2">별점이 없습니다.</div>
        )}
      </div>
      {release_date ? (
        <div className="px-2 self-start">{release_date}</div>
      ) : null}
    </div>
  );
}
