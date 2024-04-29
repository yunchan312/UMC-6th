import { useNavigate } from "react-router-dom";

export default function SearchCard({ id, title, release_date, vote_average }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/detail/${id}`)}
      className="w-full hover:bg-[rgba(185,135,135,0.8)] bg-[rgba(255,255,255,.4)] flex justify-between px-7 cursor-pointer"
    >
      <div className="flex gap-3">
        <div className="text-xl max-w-[400px] h-8 text-ellipsis overflow-hidden font-bold">
          {title}
        </div>
        <div>⭐{vote_average.toFixed(1)}</div>
      </div>
      <div>{release_date}</div>
    </div>
  );
}