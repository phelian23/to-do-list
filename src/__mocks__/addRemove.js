const add = () => {
  document.body.innerHTML = `
  <input class="taskadd" type="text" placeholder="Add to your list...">
  <ul id="tasklist"></ul>`

  const input = document.querySelector('.taskadd');
  input.value = 'something';
  const inputContainer = document.createElement('li');
  inputContainer.textContent = input;
  const tasklist = document.querySelector('#tasklist');
  return Array.from(tasklist.appendChild(inputContainer));
}