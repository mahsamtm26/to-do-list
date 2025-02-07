const formEL = document.querySelector("form");
const todos = document.querySelector(".list");

formEL.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("input");
  const inputValue = input.value;
  localStorage.setItem("todos", inputValue);
  

  createTodo(inputValue);
  input.value = "";
});

function createTodo(todo) {
  const containerEL = document.createElement("div");
  const inputEL = document.createElement("input");
  const paragraphEL = document.createElement("p");
  const buttonEL = document.createElement("button");

  // input
  inputEL.type = "checkbox";
  inputEL.classList.add("check");

  // paragraph
  paragraphEL.textContent = todo;
  paragraphEL.classList.add("task");

  //button
  buttonEL.classList.add("remove");
  buttonEL.textContent = "-";

  containerEL.classList.add("todo");

  containerEL.append(inputEL, paragraphEL, buttonEL);

  todos.appendChild(containerEL);

  inputEL.addEventListener("click", () => {
    // event.preventDefault();
    containerEL.classList.toggle("complete");
  });

  buttonEL.addEventListener("click", () => {
    containerEL.remove();
  });
}

// Local Storage

// console.log(JSON.parse(todosStorage));
const todosStorage = localStorage.getItem("todos");
