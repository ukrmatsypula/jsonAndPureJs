// Globals
let todos = [];
let users = [];

// Attach Events
document.addEventListener("DOMContentLoaded", initApp);



// Events logic
function initApp() {
  Promise.all([getAllTodos, getAllUsers]).then((values) => {
    const [todos, users] = values;

    console.log(todos, users)

    // Отправить в разметку
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
