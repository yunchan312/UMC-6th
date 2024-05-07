import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { auth, isLogin } from "../atom";
import { useNavigate } from "react-router-dom";

export default function MakeAccount() {
  const setUser = useSetRecoilState(auth);
  const setIslogin = useSetRecoilState(isLogin);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setUser(data);
    setIslogin(true);
    alert("회원가입을 축하합니다!");
    navigate("/");
  };
  return (
    <div className="h-[100vh] flex flex-col gap-5 justify-center items-center py-10">
      <div className="text-[35px] font-bold">Create Account</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 text-black"
      >
        <div>
          <input
            className="account-input"
            type="text"
            placeholder="이름을 입력해주세요"
            {...register("name", {
              required: { value: true, message: "required area" },
            })}
          />
          {errors.name && <div className="error">{errors.name.message}</div>}
        </div>

        <div>
          <input
            className="account-input"
            type="text"
            placeholder="이메일을 입력해주세요"
            {...register("email", {
              required: { value: true, message: "required area" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>

        <div>
          <input
            className="account-input"
            type="number"
            placeholder="나이를 입력해주세요"
            {...register("age", {
              required: { value: true, message: "required area" },
              min: { value: 1, message: "Really?" },
              validate: {
                isAdult: (value) =>
                  value >= 19 || "Only adult can create account",
              },
            })}
          />
          {errors.age && <div className="error">{errors.age.message}</div>}
        </div>

        <div>
          <input
            className="account-input"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("pw", {
              required: { value: true, message: "required area" },
              minLength: {
                value: 4,
                message: "Password have to be longer than 3",
              },
              maxLength: {
                value: 12,
                message: "Password have to be shorter than 13",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/,
                message:
                  "Password must contain English, numbers, and special characters.",
              },
            })}
          />
          {errors.pw && <div className="error">{errors.pw.message}</div>}
        </div>

        <div>
          <input
            className="account-input"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            {...register("confirm", {
              required: { value: true, message: "required area" },
              validate: {
                isSame: (value) =>
                  value === watch("pw") || "Password is not same",
              },
            })}
          />
          {errors.confirm && (
            <div className="error">{errors.confirm.message}</div>
          )}
        </div>
        {(watch("Name") !== "") &
        (watch("email") !== "") &
        (watch("age") !== "") &
        (watch("pw") !== "") ? (
          <input
            type="submit"
            value={"submit"}
            className="bg-logo rounded-full text-center h-[40px]"
          />
        ) : (
          <div className="bg-white text-center h-[40px] flex flex-col justify-center items-center rounded-full">
            <span className="font-bold">Can't Submit</span>
          </div>
        )}
      </form>
    </div>
  );
}
