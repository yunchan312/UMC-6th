import { useForm } from "react-hook-form";
import { auth, isLogin } from "../atom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../api";
import { useCookies } from "react-cookie";

export default function Login() {
  const setUser = useSetRecoilState(auth);
  const setLoginStatus = useSetRecoilState(isLogin);
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const tempAuth = await postLogin(data);
    if (tempAuth) {
      setUser(tempAuth);
      setCookies("token", tempAuth.token);
      setCookies("username", tempAuth.username);
      setLoginStatus(true);
      alert("로그인 성공");
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[100vh]">
      <div className="text-[35px] font-bold">Log In</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 text-black"
      >
        <div>
          <input
            className="account-input"
            type="text"
            placeholder="아이디를 입력해주세요"
            {...register("username", {
              required: { value: true, message: "required area" },
            })}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>

        <div>
          <input
            className="account-input"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("pw", {
              required: { value: true, message: "required area" },
            })}
          />
          {errors.pw && <div className="error">{errors.pw.message}</div>}
        </div>
        <input
          type="submit"
          value={"submit"}
          className="bg-logo rounded-full text-center h-[40px]"
        />
      </form>

      <div className="">
        계정이 없어요{" "}
        <span
          className="cursor-pointer text-logo"
          onClick={() => navigate("/create")}
        >
          계정만들러 가기&rarr;
        </span>
      </div>
    </div>
  );
}
