import { useRecoilValue } from "recoil";
import { todoList } from "../atom";
import Card from "./Card";

export default function List() {
  const todos = useRecoilValue(todoList);

  return (
    <div className="w-[500px]">
      {todos.map((t, i) => {
        return <Card t={t} i={i} />;
      })}
    </div>
  );
}
