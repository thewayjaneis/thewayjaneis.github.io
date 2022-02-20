const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list");
const TODOS_KEY ="todos";

let toDos = [];
function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteTodo(event){
    const deleteLi = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
    deleteLi.remove();
    saveTodos();
}
function createTodo (newTodo){ //이 빨강 newTodo는 이름의미없고 그냥 argu요소야
    const createLi = document.createElement("li");
    const createSpan = document.createElement("span");
    const createButton = document.createElement("button");
    createLi.id = newTodo.id;
    createSpan.innerText = newTodo.text;
    createButton.innerText = "✖";
    createButton.addEventListener("click", deleteTodo)
    createLi.appendChild(createSpan);
    createLi.appendChild(createButton);
    todoList.appendChild(createLi);
}
function todoSubmitPlay (event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    saveTodos();
    createTodo(newTodoObj);
   
}

todoForm.addEventListener("submit", todoSubmitPlay);


const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos){                  
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;            
  parsedTodos.forEach(createTodo);                       
} 



