const isComplete = (list, isComp, descript) => {
  if (isComp.checked) {
    list.completed = true;
    descript.style.textDecoration = 'line-through';
  } else {
    list.completed = false;
    descript.style.textDecoration = 'none';
  }
}

export default isComplete;