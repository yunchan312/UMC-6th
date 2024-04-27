import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const onPlus = () => {
    setCounter((prev) => prev + 1);
  };
  const onMinus = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={onMinus}>-1</button>
      <button onClick={onPlus}>+1</button>
    </div>
  );
}
