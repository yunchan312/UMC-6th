import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoList } from "../atom";

export default function Card({ t, i }) {
  const [done, setDone] = useState(false);
  const [list, setList] = useRecoilState(todoList);
  const onDelete = () => {
    let temp = list;
    setList(temp.slice(0, i).concat(temp.slice(i + 1)));
  };
  return (
    <div className="flex gap-4 items-center mb-4 w-full justify-between">
      <div className="flex gap-4 items-center">
        {done ? (
          <div
            className="w-5 h-5 bg-listTwo rounded-full"
            onClick={() => setDone((prev) => !prev)}
          />
        ) : (
          <div
            className="w-5 h-5 border-2 border-listTwo rounded-full"
            onClick={() => setDone((prev) => !prev)}
          />
        )}
        <div>{t}</div>
      </div>
      <div
        className="bg-list hover:bg-listTwo py-1 px-6 rounded-full cursor-pointer"
        onClick={onDelete}
      >
        delete
      </div>
    </div>
  );
}
