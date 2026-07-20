// let num = 121;
// let digit = 525;
// let arr = [];
// let palNum = (num) => {
//   let swapIn = num;
//   for (; num > 0; ) {
//     let r = num % 10;
//     arr.push(r);
//     num = Math.floor(num / 10);
//   }
//   let joinedArr = arr.join("");
//   Number(joinedArr);
//   console.log(joinedArr == swapIn);
// };
// palNum(digit);

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let swapIn = x;
  let arr = [];
  for (; x > 0; ) {
    let r = x % 10;
    arr.push(r);
    x = Math.floor(x / 10);
  }
  let newNum = arr.join("");
  newNum = Number(newNum);
  return newNum === swapIn;
};
