// Globals
const todoList = document.getElementById("todo-list");
const userSelect = document.getElementById("user-todo");
let todos = [];
let users = [];

// Attach Events
document.addEventListener("DOMContentLoaded", initApp);

// basic logic
function getUserName(userId) {
  const user = users.find((u) => u.id === userId);

  return user.name;
}

function printTodo({ id, userId, title, completed }) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.dataset.id = id;
  li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(
    userId
  )}</b></span>`;

  const status = document.createElement("input");
  status.type = "checkbox";
  status.checked = completed;

  const close = document.createElement("span");
  close.innerHTML = "&times;";
  close.classList.add("close");

  li.prepend(status);
  li.append(close);

  todoList.prepend(li);
}

function createUserOption(user) {
  const option = document.createElement("option");
  option.value = user.id;
  option.innerText = user.name;

  userSelect.append(option);
}

// Events logic
function initApp() {
  Promise.all([getAllTodos(), getAllUsers()]).then((values) => {
    [todos, users] = values;

    console.log(todos, users);

    // Отправить в разметку
    todos.forEach((todo) => printTodo(todo));
    users.forEach((user) => createUserOption(user));
  });
}

//async
async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return data;
}

async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data;
}
