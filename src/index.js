import isComplete from './change.js';
import Task from './tasks.js';
import './style.css';

function addTaskToList(task) {
  const list = document.querySelector('#tasklist');

  const listItem = document.createElement('li');

  listItem.innerHTML = `
          <div class="task disflex header">
          <div class="disflex taskp ">
          <input type="checkbox" id = "check-${task.index}" placeholder="">
          <input type="textarea" class="taskp1" id = "text-${task.index}" value = "${task.description}">
          </div>
          <div class="delete" id =${task.id}>
          <span id="list-icon"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
          <span id="list-icon-top"><i class="fa fa-trash" aria-hidden="true"></i></span>
          </div>
          </div>
          `;

  listItem.classList.add('list-item');

  list.appendChild(listItem);
}

function displayTodoList() {
  const todos = Task.getTodos();
  let i = 0;
  todos.forEach((task) => {
    i= i+1;
    task.index = i;
    addTaskToList(task);

    const descript = document.querySelector(`#text-${task.index}`);
    const isComp = document.querySelector(`#check-${task.index}`);

    if (task.completed === true) {
      descript.style.textDecoration = 'line-through';
      isComp.checked = 'true';
    } else {
      descript.style.textDecoration = 'none';
    }
  });
}

const inputs = document.querySelector('.taskadd');

inputs.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const todos = Task.getTodos();
    const complete = false;
    const index = todos.length + 1;
    const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    const description = inputs.value;
    const task = new Task(description, complete, index, id);

    addTaskToList(task);

    Task.addTask(task);
    window.location.reload();
  }
});

displayTodoList();

const listArray = Task.getTodos();
let i = 0;

listArray.forEach((list) => {
  i= i+1;
  list.index = i;
  const descript = document.querySelector(`#text-${list.index}`);
  const isComp = document.querySelector(`#check-${list.index}`);
  isComp.addEventListener('change', () => {
    isComplete(list, isComp, descript);

    localStorage.setItem('todos', JSON.stringify(listArray));
  });
});

document.querySelector('.footer').addEventListener('click', () => {
  Task.clearCompleted();
});

document.querySelector('#tasklist').addEventListener('click', (e) => {
  Task.deleteTask(e.target);

  Task.removeTask(e.target.id);
});

listArray.forEach((list) => {
  const descript = document.querySelector(`#text-${list.index}`);
  descript.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      Task.editTask(list, descript);
    }
    localStorage.setItem('todos', JSON.stringify(listArray));
  });
});
