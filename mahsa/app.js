const formEl = document.querySelector("form")
const todos = document.querySelector(".list")



formEl.addEventListener ("submit", (event) => {
    event.preventDefault()

    const input = document.querySelector("input")
    const inputValue = input.value

    creattodo(inputValue);
})

function creattodo(todo) {
    const containerEl = document.createElement("div")
    const inputEl = document.createElement("input")
    const paragraphEl = document.createElement("p")
    const buttonEl = document.createElement("button")


    //input

    inputEl.type = "checkbox"
    inputEl.classList.add("plus")
    inputEl.addEventListener("click", () => containerEl.classList.toggle("completed"));
    

    //paragraph
    paragraphEl.textContent = todo;
    paragraphEl.classList.add = ("task");

    buttonEl.textContent = "-"
    buttonEl.classList.add = ("remove");
    buttonEl.style.backgroundColor = ("transparent");
    buttonEl.style.border = ("none")
    buttonEl.style.fontSize = ("20px")
    
    buttonEl.addEventListener("click",() => {
        containerEl.remove();
    });

    containerEl.classList.add("todo")
    containerEl.append(inputEl,paragraphEl,buttonEl)
    

    todos.appendChild(containerEl)

    

    formEl.reset()


}


