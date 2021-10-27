import './style.css';

const tasks = [
  {
    description: 'Plan the day',
    completed: true,
    index: 0,
  },
  {
    description: 'Start working on project',
    completed: true,
    index: 1,
  },
  {
    description: 'Finish my project',
    completed: false,
    index: 2,
  },
];

function addTaskToList(task) {
  const list = document.querySelector('#tasklist');

  const listItem = document.createElement('li');

  listItem.innerHTML = `
      <div class="task disflex padbor">
      <div class="disflex taskp">
      <input type="checkbox" class="checkbox" placeholder="">
      <p class="taskp1">${task.description}</p>
      </div>
      <span id="list-icon"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
      </div>
      `;

  list.appendChild(listItem);
}

tasks.forEach((task) => addTaskToList(task));