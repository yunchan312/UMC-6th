import { Outlet, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { useRecoilValue } from "recoil";
import { isLogin } from "../atom";

export default function Layout() {
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
    <div className="">
      <div className="absolute z-50">
        <Nav />
      </div>
      {isLoading ? <Loading /> : <Outlet />}
    </div>
  );
}
