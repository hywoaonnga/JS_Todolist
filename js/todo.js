const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // JSON.stringify: 값을 문자열로 바꿔줌.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function finishToDo(event) {
  const li = event.target.parentElement;
  li.classList.toggle("line");
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  const checkBox = document.createElement("botton");
  checkBox.innerText = "☑️";
  const button = document.createElement("botton");
  button.innerText = "​✖️​​";
  checkBox.addEventListener("click", finishToDo);
  button.addEventListener("click", deleteToDo);
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDo.text;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // forEach: array의 각각의 item을 함수의 argument로 넘겨준다.
  parsedToDos.forEach(paintToDo);
}
