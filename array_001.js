/**
 * refer: https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769
 * Tip 1: Array.map()
 * Tip 2: Array.filter()
 * Tip 3: Array.reduce()
 * Tip 4: Array.reduceRight()
 */

// Tip 1
const num1to4 = [1, 2, 3, 4];
const numMultiply2 = num1to4.map((e) => e * 2); // return new array
console.table(numMultiply2); // [2, 4, 6, 8]

// Tip 2
const evenNum = [2, 4, 6, 8, 10];
const numBiggerThan4 = evenNum.filter((e) => e > 4); // return new array
console.table(numBiggerThan4); // [6, 8, 10]

// Tip 3
function cbSumNum1To5(prevVal, currVal, currIndex, array) {
  console.log(prevVal, currVal, currIndex, array);
  return prevVal + currVal;
}

const num1To5 = [1, 2, 3, 4, 5];
const sumNum1To5 = num1To5.reduce((total, e) => total + e, 0);
console.log(sumNum1To5); // 15
const sumNum1To5Init11 = num1To5.reduce((total, e) => total + e, 11);
console.log(sumNum1To5Init11); // 26
num1To5.reduce(cbSumNum1To5, 5);

// Tip 4
const num1To6 = [1, 2, 3, 4, 5, 6];
// const sumNum1To6 = num1To6.reduce
