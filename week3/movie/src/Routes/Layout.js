import { Outlet } from "react-router-dom";
import Loading from "../Components/Loading";
import { useEffect, useState } from "react";
import Nav from "../Components/Nav";

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
