export default function isComplete(i, listArray, isComp, descript) {
  if (isComp.checked) {
    if (listArray[i].completed === true) {
      listArray[i].completed = false;
      descript.style.textDecoration = 'none';
    } else {
      listArray[i].completed = true;
      descript.style.textDecoration = 'line-through';
    }
  } else if (listArray[i].completed === true) {
    listArray[i].completed = false;
    descript.style.textDecoration = 'none';
  } else {
    listArray[i].completed = true;
    descript.style.textDecoration = 'line-through';
  }
}
