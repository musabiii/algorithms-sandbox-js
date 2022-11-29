ls = [8, 5, 3, 2, 7, 5, 3, 6, 8, 5, 9, 2];
// ls = [1,2,3,4,5,6,7];
console.log(ls);
Sort(ls);
console.log(ls);

function Sort(ls) {
  let l = ls.length;

  for (let i = 1; i < l; i++) {
    sorted = false;
    j = i;
    while (!sorted && j > 0) {
      sorted = true;
      if (ls[j]<ls[j-1]) {
        swap(ls,j,j-1);
        sorted = false;
      }
      j--;
    }
  }
}

function swap(ls, i, j) {
  let tmp = ls[i];
  ls[i] = ls[j];
  ls[j] = tmp;
}
