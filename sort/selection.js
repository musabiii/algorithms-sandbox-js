
ls = [8, 5, 3, 2, 7, 5, 3, 6, 8, 5, 9, 2];
selectionSort(ls);
console.log(ls);

function selectionSort(ls) {
  for (let j = 0; j < ls.length; j++) {
    let minIndex = j;
    for (let i = j+1; i < ls.length; i++) {
      if (ls[i] < ls[minIndex]) {
        minIndex = i;
      }
    }
    swap(ls,j,minIndex);
  }
}

function swap(ls, i, j) {
  let tmp = ls[i];
  ls[i] = ls[j];
  ls[j] = tmp;
}