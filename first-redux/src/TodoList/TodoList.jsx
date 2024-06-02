import { useRecoilState } from "recoil";
import { todoList } from "../atom";
import List from "./List";

export default function TodoList() {
  const [todo, setTodo] = useRecoilState(todoList);
  const onSubmit = (e) => {
    e.preventDefault();
    setTodo((prev) => [...prev, e.target[0].value]);
  };
  return (
    <div className="px-10 flex flex-col justify-center items-center">
      <form className="py-6" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your Todo"
          className="border-listTwo border-2 rounded-full w-[500px] px-5 py-3"
        />
        <input type="submit" className="hidden" />
      </form>
      <List />
    </div>
  );
}
