export default class Task {
  constructor(description, completed, index, id) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.id = id;
  }

  static getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    } return todos;
  }

  static addTask(task) {
    const tasks = Task.getTodos();
    tasks[tasks.length] = task;
    localStorage.setItem('todos', JSON.stringify(tasks));
  }

  static deleteTask(targetel) {
    if (targetel.classList.contains('delete')) {
      targetel.parentElement.parentElement.remove();
    }
  }

  static removeTask(id) {
    const todos = Task.getTodos();
    const newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  static editTask(list, descript) {
    list.description = descript.value;
  }

  static clearCompleted() {
    const todos = Task.getTodos();
    const newTodos = todos.filter((todo) => todo.completed !== true);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    window.location.reload();
  }
}