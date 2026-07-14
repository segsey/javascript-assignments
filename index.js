// 1) move zero digits to the end of an array
// 2) addition of 2 integers after each other to meet a target value

// assignment 1
// let nums = [9, 8, 4, 5, 3, 2, 7, 7];
let nums = [2, 7, 11, 15];

let sum = (nums, target) => {
  nums.forEach((num, index, arr) => {
    if (num + arr[index + 1] === target) {
      console.log(num, arr[index + 1], "numbers themselves");
      console.log([index, index + 1], "index of number");
    } else {
      console.log("array element does not meet condition");
    }
  });
};
sum(nums, 22);

// assignment 2
let arr = [5, 0, 8, 7, 0, 9, 0, 1, 0, 3];
let arr2 = [2, 4, 4, 0, 5, 0, 5];
let arr3 = [3, 4, 5, 6, 7, 8, 9];
let moveZeros = (arr) => {
  if (arr.some((num) => num === 0)) {
    let zeros = arr.filter((num) => num === 0);
    let notZero = arr.filter((num) => num > 0);
    arr = [];
    arr = [...notZero, ...zeros];
    return console.log(arr, "zeros moved");
  } else {
    console.log(arr, "no zero");
  }
};
moveZeros(arr);
moveZeros(arr2);
moveZeros(arr3);
