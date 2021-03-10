// * You should use an `<ul>` for the list and `<li>` tags for the contents.
// * Each todo should have an event listener for when they are clicked.
// * The event listener should add the line-through style to the todo.
// * The event listener should also remove the line-through style conditionally by checking if the style is already applied.
// * All of your HTML should go inside the `<div>` with the id **"content"**.

function toggleIsCompleted(event) {
  const targetedTodo = event.target;
  targetedTodo.classList.toggle("is-complete");
}

function todoList(todos) {
  // Write your code here...
  const content = document.querySelector("#content");
  for (todo of todos) {
    console.log(todo.todo);
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerText = todo.todo;
    ul.appendChild(li);
    content.appendChild(ul);
    li.addEventListener("click", toggleIsCompleted);
  }

  //second solution
  // todos.forEach((element) => {
  //   console.log(element);
  //   const ul = document.createElement("ul");
  //   const li = document.createElement("li");
  //   li.innerText = element.todo;
  //   ul.appendChild(li);
  //   content.appendChild(ul);
  //   li.addEventListener("click", toggleIsCompleted);
  // });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
