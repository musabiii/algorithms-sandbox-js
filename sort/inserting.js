ls = [8, 5, 3, 2, 7, 5, 3, 6, 8, 5, 9, 2];
insertionSort(ls);
console.log(ls);

function insertionSort(ls) {
  let length = ls.length;

  for (let i = 1; i < length; i++) {
    let last = i;
    let j = last-1;
    while (j>0 && ls[j]>ls[j+1]) {
        swap(ls,j,j+1);
        j--;
    }
    // for (let j = last - 1; j >= 0; j--) {
    //   if (ls[j] > ls[last]) {
    //     swap(ls, last, j);
    //     last--;
    //   }
    // }
  }
}

function swap(ls, i, j) {
  let tmp = ls[i];
  ls[i] = ls[j];
  ls[j] = tmp;
}
