import { useRecoilState, useSetRecoilState } from "recoil";
import { isModal, playList, total } from "../atom";
import itemsList from "./ItemsList";
import { useEffect, useState } from "react";
import CartCard from "./cartCard";
import Modal from "./Modal";

export default function PlayList() {
  const [cart, setCart] = useRecoilState(playList);
  const [totalPrice, setTotalPrice] = useRecoilState(total);
  const setIsModalState = useSetRecoilState(isModal);
  const onReset = () => {
    setIsModalState(true);
  };
  useEffect(() => {
    setCart(itemsList);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5 py-10">
        <div className="text-center mt-10 mb-6 font-bold text-[40px]">
          당신이 선택한 음반
        </div>
        {cart.length >= 1 ? (
          cart.map((item, i) => {
            return <CartCard {...item} key={i} i={i} />;
          })
        ) : (
          <div className="font-bold text-5xl text-listTwo py-10">텅</div>
        )}
        <div className="pt-5 border-t-2 border-black w-[60%] flex justify-between px-5">
          <span className="font-bold">총 금액</span>

          <span className="text-listTwo font-bold">\ {totalPrice}</span>
        </div>

        <div
          onClick={onReset}
          className="border-2 px-4 rounded-lg border-red-400 text-red-400 font-bold select-none cursor-pointer hover:text-white hover:bg-red-400"
        >
          장바구니 초기화
        </div>
      </div>
    </>
  );
}
