import { useSetRecoilState } from "recoil";
import { isModal, playList, total } from "../atom";
import { useEffect } from "react";

export default function Modal() {
  const modalStatus = useSetRecoilState(isModal);
  const setCart = useSetRecoilState(playList);
  const setTotal = useSetRecoilState(total);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed bg-[rgba(0,0,0,0.7)] z-50 inset-0 flex justify-center items-center">
      <div className="bg-white w-[50%] h-[300px] flex flex-col justify-around items-center rounded-md">
        <div className="text-3xl font-bold">진짜로 초기화 하시겠습니까?</div>
        <div className="flex w-full justify-around items-center">
          <span
            onClick={() => {
              modalStatus(false);
            }}
            className="border-2 border-listTwo w-[150px] rounded-md text-center font-bold hover:text-white text-listTwo cursor-pointer hover:bg-listTwo"
          >
            절대 아니에요!
          </span>
          <span
            onClick={() => {
              setCart([]);
              setTotal(0);
              modalStatus(false);
            }}
            className="border-2 border-red-400 w-[150px] rounded-md text-center font-bold hover:text-white text-red-400 cursor-pointer hover:bg-red-400"
          >
            당연하죠!
          </span>
        </div>
      </div>
    </div>
  );
}
