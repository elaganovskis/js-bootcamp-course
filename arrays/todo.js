// const todos = ['Walk the dog', 'Finish the course', 'Clean the room', 'Train', 'Read a book'];


const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
},]

// 1. Convert array to array of objects -> text, completed property
// 2. Create function to remove a todo by text value


const deleteTodo = function (todos, todosText) {
    let index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todosText.toLowerCase();
    })

    if(index > -1) {
        todos.splice(index, 1);
    }
}

const getThingsToDo = function(todos) {
    return todos.filter(function(todo, index) {
        let status = todo.completed === false;
        return status;
    })
}

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if(a.completed && !b.completed) {
            return 1
        } else if (!a.completed && b.completed) {
            return -1
        } else {
            return 0
        }
    })
}


sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Order cat food asdasd')
// console.log(todos)
