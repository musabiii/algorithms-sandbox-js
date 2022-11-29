const arr = [1, 2, 6, 3, 6, 8, 4, 8, 3, 6, 3, 9, 2];
let level = 0;
console.log(arr);
const result = mergeSort(arr);
console.log(result);

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  level++;
  console.log(level);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
