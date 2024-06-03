import { useState } from "react";
import { useRecoilState } from "recoil";
import { playList, total } from "../atom";
import { ChevronDown, ChevronUp } from "./Icons";

export default function CartCard({ title, singer, price, img, i }) {
  const [count, setCount] = useState(1);
  const [list, setList] = useRecoilState(playList);
  const [totalPrice, setTotalPrice] = useRecoilState(total);

  const onUpClick = () => {
    setTotalPrice(totalPrice + parseInt(price));
    setCount((prev) => prev + 1);
  };
  const onDownClick = () => {
    setTotalPrice(totalPrice - parseInt(price));
    if (count - 1 === 0) {
      setList(list.slice(0, i).concat(list.slice(i + 1)));
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="w-[60%] flex items-center justify-between">
      <div className="flex gap-3 items-center">
        {/* <img src={img} className="w-32 select-none" /> */}
        <div
          className={`min-w-[128px] h-[128px] overflow-hidden`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[120px] h-[120px] relative right-16 bottom-16 rounded-full bg-list bg-opacity-85 flex justify-end items-end select-none">
            <span className="font-bold text-2xl w-[30px] justify-center text-listTwo relative right-5 bottom-5 text-center">
              {i + 1}
            </span>
          </div>
        </div>
        <div className="h-[128px]">
          <div className="flex flex-col h-full justify-between font-semibold select-none">
            <div className="text-[22px]">{title}</div>
            <div>
              <div className="text-[12px]">{singer}</div>
              <div className="text-listTwo font-bold select-none">
                \ {price}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-listTwo h-[120px] flex flex-col justify-between px-3">
        <span className="cursor-pointer" onClick={onUpClick}>
          <ChevronUp />
        </span>
        <div className="text-center select-none">{count}</div>
        <span className="cursor-pointer" onClick={onDownClick}>
          <ChevronDown />
        </span>
      </div>
    </div>
  );
}
