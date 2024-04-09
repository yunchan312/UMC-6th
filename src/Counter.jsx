import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onPlus = () => {
    setCount((prev) => prev + 1);
  };
  const onMinus = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="p-10 flex flex-col items-center">
      <div>{count}</div>
      <div className="flex gap-1">
        <button onClick={onMinus}>-1</button>
        <button onClick={onPlus}>+1</button>
      </div>
    </div>
  );
}
