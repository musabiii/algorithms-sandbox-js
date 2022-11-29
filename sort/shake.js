ls = [8, 5, 3, 2, 7, 5, 3, 6, 8, 5, 9, 2];
// ls = [1,2,3,4,5,6,7];
console.log(ls);
ShakeSort(ls);
console.log(ls);

function ShakeSort(ls) {
  const l = ls.length;

  let i = 0;
  sorted = false;

  let StartIndex = 0;
  let EndIndex = l - 1;

  while (!sorted && StartIndex < EndIndex) {
    sorted = true;

    for (let i = StartIndex; i < EndIndex - 1; i++) {
      if (ls[i] > ls[i + 1]) {
        swap(ls, i, i + 1);
        sorted = false;
      }
    }

    for (let j = EndIndex - 1; j >= StartIndex; j--) {
      if (ls[j] > ls[j + 1]) {
        swap(ls, j, j + 1);
        sorted = false;
      }
    }

    StartIndex++;
    EndIndex--;
  }
}

function swap(ls, i, j) {
  let tmp = ls[i];
  ls[i] = ls[j];
  ls[j] = tmp;
}
