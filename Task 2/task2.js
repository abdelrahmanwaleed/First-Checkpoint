const array1 = [3, 1, 7, 9];
const array2 = [2, 4, 1, 9, 3];

const output1 = array2.filter(function (obj) {
  return array1.indexOf(obj) === -1;
});

console.log(output1);

const output2 = array1.filter(function (obj) {
  return array2.indexOf(obj) === -1;
});

console.log(output2);

let arr3 = output1.concat(output2);

console.log(arr3);

let result = arr3.reduce(function (a, b) {
  return a + b;
});

console.log(result);
