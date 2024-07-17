
const sort = (arr, order = 'asc') => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {

      const swap = (order === 'asc') ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];

      if (swap) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// const arr = [1, 40, -5, 10, 0];
//
// console.log(sort(arr, 'asc'));
// console.log(sort(arr, 'desc'));



