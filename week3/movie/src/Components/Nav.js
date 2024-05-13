import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { auth, isLogin, navState } from "../atom";

export default function Nav() {
  const navigate = useNavigate();
  const [status, setStatus] = useRecoilState(navState);
  const [loginStatus, setLoginState] = useRecoilState(isLogin);
  const [user, setUser] = useRecoilState(auth);
  return (
    <div className="gap-10 flex justify-between px-12 py-1 items-center bg-gradient-to-b from-black via-black/60 to-transparent w-[100vw]">
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
          className={`cursor-pointer flex gap-3 ${
            status === 1 ? "text-logo" : "text-white"
          }`}
        >
          <span>
            {loginStatus ? `반가워요 ${user.name}님!` : `로그인이 필요합니다.`}
          </span>
          {loginStatus ? (
            <span
              onClick={() => {
                navigate("/login");
                setLoginState(false);
                setUser({});
              }}
              className="hover:scale-[1.1]"
            >
              로그아웃
            </span>
          ) : (
            <span
              onClick={() => navigate("/login")}
              className="hover:scale-[1.1]"
            >
              로그인
            </span>
          )}
        </span>
        <span
          className={`cursor-pointer hover:scale-[1.1] ${
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
          className={`cursor-pointer hover:scale-[1.1] ${
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
          className={`cursor-pointer hover:scale-[1.1] ${
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
          className={`cursor-pointer hover:scale-[1.1] ${
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
  );
}
