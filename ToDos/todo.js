const form = document.querySelector(".form");
const doneBoard = document.querySelector(".dones");
const del = document.querySelector(".delete");
const todoNodes = document.querySelector(".todos");

function paintNode(todoObj) {
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo");
  newTodo.id = todoObj.id;
  const newTodoText = document.createElement("div");
  newTodoText.classList.add("todoText");
  const newComplete = document.createElement("button");
  newComplete.classList.add("complete");
  newComplete.innerText = "완료";
  newComplete.addEventListener("click", onComplete);
  newTodoText.innerText = todoObj.text;

  newTodo.appendChild(newTodoText);
  newTodo.appendChild(newComplete);

  todoNodes.appendChild(newTodo);
}
function onComplete(e) {
  const temp = e.target.parentElement;
  temp.remove();
  temp.lastChild.innerText = "삭제";
  temp.lastChild.classList.remove("complete");
  temp.lastChild.classList.add("delete");
  temp.lastChild.addEventListener("click", (e) => onDelete(e));
  temp.classList.remove("todo");
  temp.classList.add("done");
  temp.firstChild.classList.remove("todoText");
  temp.firstChild.classList.add("doneText");
  doneBoard.appendChild(temp);
}
function onDelete(e) {
  const temp = e.target.parentElement;
  temp.remove();
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoObj = {
    id: Math.ceil(Math.random() * 100),
    text: e.target[0].value,
  };
  paintNode(todoObj);
});
