import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border-b-2 border-black py-5 text-3xl font-bold w-[300px] text-center">
        UMC week9
      </div>
      <div
        onClick={() => navigate("/todolist")}
        className="my-3 py-3 w-[300px] rounded-full text-center bg-list hover:bg-listTwo cursor-pointer"
      >
        todoList
      </div>
      <div
        onClick={() => navigate("/playlist")}
        className="py-3 w-[300px] rounded-full text-center bg-list hover:bg-listTwo cursor-pointer"
      >
        playList
      </div>
    </div>
  );
}
