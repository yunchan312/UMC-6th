import { useState } from "react";

export default function Modal() {
  const [status, setStatus] = useState(false);
  const onOpen = () => {
    setStatus((prev) => (prev = !prev));
  };
  return (
    <div className="p-10">
      <div className="text-3xl font-bold">안녕하세요</div>
      <div>내용 내용 내용</div>
      <div
        onClick={onOpen}
        className="border-2 border-black w-[80px] text-center cursor-pointer"
      >
        버튼열기
      </div>
      {status ? (
        <div className="w-[100vw] h-[100vh] bg-black bg-opacity-55 absolute top-0 left-0 flex justify-center items-center">
          <div className="bg-white px-7 py-3 w-[500px] h-[200px] flex flex-col justify-around rounded-lg">
            <div className="text-3xl font-bold">안녕하세요!</div>
            <div>어쩌구 저쩌구 내용 내용 내용</div>
            <div
              onClick={onOpen}
              className="border-2 border-black w-[80px] text-center cursor-pointer self-end"
            >
              닫기
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
