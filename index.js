ls = [8, 5, 3, 2, 7, 5, 3, 6, 8, 5, 9, 2];
MergeSort(ls);
console.log(ls);

function MergeSort(ls) {

}

function swap(ls, i, j) {
  let tmp = ls[i];
  ls[i] = ls[j];
  ls[j] = tmp;
}
