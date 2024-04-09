import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="py-5 px-7 flex flex-col items-center">
      <div className="text-3xl py-1 border-b-2 w-full text-center">Week2</div>
      <div className="flex gap-5">
        <div
          onClick={() => {
            navigate("/counter");
          }}
          className="text-xl cursor-pointer"
        >
          Counter
        </div>
        <div
          onClick={() => {
            navigate("/modal");
          }}
          className="text-xl cursor-pointer"
        >
          Modal
        </div>
        <div
          onClick={() => {
            navigate("/todo");
          }}
          className="text-xl cursor-pointer"
        >
          TodoLists
        </div>
        <div
          onClick={() => {
            navigate("/movie");
          }}
          className="text-xl cursor-pointer"
        >
          Movies
        </div>
      </div>
    </div>
  );
}
