const filter = (array, fn) => {
  const sortedArray = [];
  for (const element of array) {
    if (!fn(element)) {
      sortedArray.push(element);
    }
  }
  return sortedArray;
};

// const check = (num) => {
//   return num % 2 === 0;
// }
//
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = [0, -2, 4, 5, 6, 15];
// console.log(filter(arr, check));
// console.log(filter(arr2, check));
