export default function TodoBtn({ id, content, setTodos, todos }) {
  const onClick = (e) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(updateTodos);
  };
  return (
    <div className="my-1 flex gap-2">
      <div className="w-[200px]">{content}</div>
      <button onClick={onClick}>완료</button>
    </div>
  );
}
