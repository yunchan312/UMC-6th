import { useState } from "react";
import TodoBtn from "./components/todoBtn";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const onDelete = (e) => {
    e.target.parentNode.remove();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { id: todos.length + 1, content: e.target[0].value, isDone: false },
    ]);
  };
  return (
    <div>
      <div className="font-bold text-3xl text-center">Todo Lists</div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center"
      >
        <input
          type="text"
          placeholder="What is your Todo🔥"
          className="border-2 border-black h-[50px] w-[80%] px-2"
        />
        <input type="submit" className="hidden" />
      </form>

      <div>
        <div className="flex justify-around items-center">
          <div className="border-b-2 border-black">해야 할 일</div>
          <div className="border-b-2 border-black">해낸 일</div>
        </div>
        <div className="flex items-center justify-around">
          <div>
            {todos.map((obj) => {
              if (!obj.isDone) {
                return (
                  <TodoBtn
                    key={obj.id}
                    {...obj}
                    setTodos={setTodos}
                    todos={todos}
                  />
                );
              }
            })}
          </div>
          <div>
            {todos.map((obj) => {
              if (obj.isDone) {
                return (
                  <div className="flex gap-2 my-1">
                    <div className="w-[200px]">{obj.content}</div>
                    <button onClick={onDelete}>삭제</button>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="flex items-center justify-around mr-auto ml-auto"></div>
      </div>
    </div>
  );
}
