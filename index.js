ls = [8, 5, 3, 2, 7, 5, 3, 6, 8, 5, 9, 2];
// ls = [1,2,3,4,5,6,7];
console.log(ls);
SelectionSort(ls);
console.log(ls);

function SelectionSort(ls) {
  let l = ls.length;

  for (let i = 0; i < l; i++) {
    let min = 0;

    for (let j = i+1 ; j < l; j++) {
      if (ls[j] < ls[min]) {
        min = j;
      }
      swap(ls,min,i);
    }
  }
}

function swap(ls, i, j) {
  let tmp = ls[i];
  ls[i] = ls[j];
  ls[j] = tmp;
}
