const add = (task) => {
  document.body.innerHTML = `
  <input class="taskadd" type="text" placeholder="Add to your list...">
  <ul id="tasklist"></ul>`

  const input = document.querySelector('.taskadd');
  input.value = task;
  const inputContainer = document.createElement('li');
  inputContainer.textContent = input.value;
  const tasklist = document.querySelector('#tasklist');
  tasklist.appendChild(inputContainer);

  const list = Array.from(document.querySelectorAll('#tasklist ul'));
  console.log(list);
  return list;
}

export default add;