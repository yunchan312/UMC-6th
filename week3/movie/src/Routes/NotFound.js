import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLogin } from "../atom";

export default function NotFound() {
  const navigate = useNavigate();
  const loginStatus = useRecoilValue(isLogin);
  return (
    <div className="h-[91vh] flex flex-col justify-center items-center">
      <div className="text-3xl font-bold justify-center items-center">
        404 NotFound
      </div>
      {loginStatus ? (
        <div
          onClick={() => navigate("")}
          className="bg-logo hover:bg-[#ab070f] w-[20%] py-2 font-bold rounded-full text-center cursor-pointer"
        >
          Return to Home
        </div>
      ) : (
        <div
          onClick={() => navigate("/login")}
          className="bg-logo hover:bg-[#ab070f] w-[20%] py-2 font-bold rounded-full text-center cursor-pointer"
        >
          Go to login
        </div>
      )}
    </div>
  );
}
