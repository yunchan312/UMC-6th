import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="border-2 h-[91vh] flex flex-col justify-center items-center">
      <div className="text-3xl font-bold justify-center items-center">
        404 NotFound
      </div>
      <div
        onClick={() => navigate("")}
        className="bg-logo hover:bg-[#ab070f] w-[20%] py-2 font-bold rounded-full text-center cursor-pointer"
      >
        Return to Home
      </div>
    </div>
  );
}
