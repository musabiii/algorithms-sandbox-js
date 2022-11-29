ls = [8, 5, 3, 2, 7, 5, 3, 6, 8, 5, 9, 2];
// ls = [1,2,3,4,5,6,7];
console.log(ls);
BubbleSort(ls);
console.log(ls);

function BubbleSort(ls) {
  const l = ls.length;

  let i = 0;
  sorted = false;
  while (!sorted && i < l) {
    sorted = true;
    for (let j = 0; j < l - i - 1; j++) {
      if (ls[j] > ls[j + 1]) {
        swap(ls, j, j + 1);
        sorted = false;
      }
    }
    i++;
  }
}

function swap(ls, i, j) {
  let tmp = ls[i];
  ls[i] = ls[j];
  ls[j] = tmp;
}
