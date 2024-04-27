import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { navState } from "../atom";
import Loading from "../Components/Loading";
import { useEffect, useState } from "react";

export default function Layout() {
  const navigate = useNavigate();
  const [status, setStatus] = useRecoilState(navState);
  const [isLoading, setIsLoading] = useState(true);
  const Init = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  useEffect(() => {
    Init();
  }, []);
  return (
    <div>
      <div className="flex justify-between px-12 py-3 items-center bg-black">
        <span
          className="text-[35px] font-bold text-logo title cursor-pointer"
          onClick={() => {
            navigate("/");
            setStatus(0);
          }}
        >
          MOVIE
        </span>
        <span className="flex gap-4">
          <span
            className={`cursor-pointer ${
              status === 1 ? "text-logo" : "text-white"
            }`}
            onClick={() => {
              navigate("/create");
              setStatus(1);
            }}
          >
            회원가입
          </span>
          <span
            className={`cursor-pointer ${
              status === 2 ? "text-logo" : "text-white"
            }`}
            onClick={() => {
              navigate("/popular");
              setStatus(2);
            }}
          >
            Popular
          </span>
          <span
            className={`cursor-pointer ${
              status === 3 ? "text-logo" : "text-white"
            }`}
            onClick={() => {
              navigate("/now");
              setStatus(3);
            }}
          >
            Now Playing
          </span>
          <span
            className={`cursor-pointer ${
              status === 4 ? "text-logo" : "text-white"
            }`}
            onClick={() => {
              navigate("/top");
              setStatus(4);
            }}
          >
            Top Rated
          </span>
          <span
            className={`cursor-pointer ${
              status === 5 ? "text-logo" : "text-white"
            }`}
            onClick={() => {
              navigate("/upcoming");
              setStatus(5);
            }}
          >
            Upcoming
          </span>
        </span>
      </div>
      {isLoading ? <Loading /> : <Outlet />}
    </div>
  );
}
