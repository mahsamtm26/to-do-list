const formEL = document.querySelector("form")
const todos = document.querySelector(".list")

formEL.addEventListener("submit", (event) => {
    event.preventDefault()

    const input = document.querySelector("input")
    const inputValue = input.value;

    createTodo(inputValue);
})

function createTodo(todo){
  const containerEL = document.createElement("div")
  const inputEL = document.createElement("button")
  const pragraphEL = document.createElement("p")
  const buttonEL = document.createElement("button")

  
//input
inputEL.type = "chechbox"
inputEL.classList.add("check")

//pragraph
pragraphEL.textContent = todo;
pragraphEL.classList.add("task")

//button
buttonEL.classList.add("remove")

buttonEL.textContent = "-"

containerEL.classList.add("todo")

containerEL.append(inputEL, pragraphEL, buttonEL)

todos.appendChild(containerEL)

inputEL.addEventListener("click", () =>{
    
containerEL.classList.toggle("complete")
});

buttonEL.addEventListener("click", () => {
    containerEL.remove()
})

}
