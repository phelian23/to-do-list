export default function isComplete(i, listArray, isComp, descript) {
  if (isComp.checked) {
    listArray[i].completed = true;
    descript.style.textDecoration = 'line-through';
  } else {
    listArray[i].completed = false;
    descript.style.textDecoration = 'none';
  }
}
