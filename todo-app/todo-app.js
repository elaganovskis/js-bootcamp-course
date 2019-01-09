const todos = [
  {
    text: "Order cat food",
    completed: true
  },
  {
    text: "Clean kitchen",
    completed: false
  },
  {
    text: "Buy food",
    completed: true
  },
  {
    text: "Do work",
    completed: false
  },
  {
    text: "Exercise",
    completed: true
  }
];

const filters = {
  searchText: ''
};

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo){
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left!`
  document.querySelector('#todos').appendChild(summary);

  filteredTodos.forEach(function(todo){
    const newTodo = document.createElement('p');
    newTodo.textContent = todo.text;
    document.querySelector('#todos').appendChild(newTodo);
  });
};

renderTodos(todos, filters);

// Listen for new todo 
// const addButton = document.getElementById('add-todo');
// addButton.addEventListener('click', function(e){
//   console.log('hey')
// });

// Input for adding a new todo
const input = document.querySelector('#new-todo');

input.addEventListener('input', function(e){
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});





