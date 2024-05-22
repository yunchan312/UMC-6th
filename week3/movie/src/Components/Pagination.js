import { useRecoilState } from "recoil";
import { page } from "../atom";

export default function Pagination() {
  const [num, setNum] = useRecoilState(page);
  return (
    <div className="text-center">
      <div className="flex gap-5 justify-center items-center">
        <span
          onClick={() => setNum(1)}
          className={`
            ${num === 1 ? "selected-page" : "default-page"}
        `}
        >
          1
        </span>
        <span
          onClick={() => setNum(2)}
          className={`
            ${num === 2 ? "selected-page" : "default-page"}
        `}
        >
          2
        </span>
        <span
          onClick={() => setNum(3)}
          className={`
            ${num === 3 ? "selected-page" : "default-page"}
        `}
        >
          3
        </span>
        <span
          onClick={() => setNum(4)}
          className={`
            ${num === 4 ? "selected-page" : "default-page"}
        `}
        >
          4
        </span>
        <span
          onClick={() => setNum(5)}
          className={`
            ${num === 5 ? "selected-page" : "default-page"}
        `}
        >
          5
        </span>
      </div>
    </div>
  );
}
