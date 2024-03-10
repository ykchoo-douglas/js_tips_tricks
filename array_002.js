/**
 * refer: https://dev.to/ramgendeploy/learn-javascript-reduce-method-with-5-examples-128n
 * title: Master the Javascript Array Reduce Method with 10 Examples
 * Tip 1: MDN explain
 * Tip 2: summation and multiplication
 * Tip 3: find the maximum
 * Tip 4: concatenating uneven arrays
 */

// Tip 1
const arrayNum = [1, 2, 3, 4];
const initialValue = 3;
const sumWithInitial = arrayNum.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial); // 13

// Tip 2
const arrayNumRandom = [3, 5, 4, 3, 6, 2, 3, 4];
const summation = arrayNumRandom.reduce((acc, val) => acc + val);
const summationCb = arrayNumRandom.reduce(function (acc, val) {
  return acc + val;
});

console.log(summation); // 30
console.log(summationCb); // 30

const summationWithInit = arrayNumRandom.reduce((acc, val) => acc + val, 5);
console.log(summationWithInit); // 35

const multiplication = arrayNumRandom.reduce((acc, val) => acc * val);
console.log(multiplication);

// Tip 3
const maxInRandom = arrayNumRandom.reduce(
  (acc, val) => Math.max(acc, val),
  -Infinity
);
console.log(maxInRandom); // 6
const maxInRandomStd = Math.max(...arrayNumRandom);
console.log(maxInRandomStd); // 6

function findMax(acc, val) {
  return acc > val ? acc : val;
}
const maxInRandomCb = arrayNumRandom.reduce(findMax, 0);
console.log(maxInRandomCb); // 6

// Tip 4
const arrWords = [
  ['The', 'red', 'horse'],
  ['Plane', 'over', 'the', 'ocean'],
  ['Chocolate', 'ice', 'cream', 'is', 'awesome'],
  ['this', 'is', 'a', 'long', 'sentence'],
];
const joinArrWords = arrWords.map((words) =>
  words.reduce((acc, val) => `${acc} ${val}`)
);
console.table(joinArrWords);
