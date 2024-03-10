/**
 * refer: https://www.freecodecamp.org/news/javascript-tips-for-better-web-dev-projects/
 * Tip 26: Remove Duplicates from an Array with Set and Map
 * Tip 27: Map Through and Array and Flatten it with the flatMap() Method
 * Tip 28: Use the padStart() and padEnd() Methods to Pad a string with a Character
 * Tip 29: Use the insertAdjacentHTML() method of DOM to Insert a String into the DOM
 * Tip 30: Use the createTreeWalker() DOM Method to Traverse the DOM
 */

// Tip 26
const numsWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = [...new Set(numsWithDuplicates)]; // using Set

console.table(uniqueNums); // [1, 2, 3, 4, 5]
console.log(uniqueNums);

const fruitsWithDuplicates = [
  'Mango',
  'Cashew',
  'Barley',
  'Mango',
  'Barley',
  'Berry',
  'Cashew',
];

const uniqueFruits = [
  ...new Map(fruitsWithDuplicates.map((item) => [item, true])).keys(),
]; // using Map

console.table(uniqueFruits); // ['Mango', 'Cashew', 'Barley', 'Berry']
console.log(uniqueFruits);

// Tip 27
const nums = [1, 2, 3, 4, 5];
const doubledAndSquared = nums.map((num) => [num * 2, num * num]);
const flattenDoubleAndSquared = doubledAndSquared.flat();

console.table(doubledAndSquared);
console.table(flattenDoubleAndSquared);

const combinedMapAndFlat = nums.flatMap((num) => [num * 2, num * num]);
console.table(combinedMapAndFlat);

// Tip 28 (handy for formatting strings and aligning text in columns)

const helloStr = 'Hello';
const paddedHello = helloStr.padStart(10, '*');
console.log(paddedHello);

const worldStr = 'World';
const paddedWorld = worldStr.padEnd(10, '-');
console.log(paddedWorld);

const coolStr = 'Cool'; // Cool is 4 characters
const paddedCool = coolStr.padStart(10, '#').padEnd(15, '+');
console.log(paddedCool);

const products = [
  { name: 'Apples', price: 1.5 },
  { name: 'Bananas', price: 0.75 },
  { name: 'Oranges', price: 2 },
];

console.log('Product      Sales');
console.log('------------------');

products.forEach(({ name, price }) => {
  const paddedName = name.padEnd(10, ' ');
  const formattedPrice = price.toFixed(2).padStart(8, ' ');
  console.log(`${paddedName}${formattedPrice}`);
});

function formatTime(currentTime, totalTime) {
  // helper function to pad a number with leading zeros
  const padWithZero = (num) => num.toString().padStart(2, '0');

  // format current time in minutes:seconds
  const formattedCurrentTime = `${padWithZero(
    Math.floor(currentTime / 60)
  )}:${padWithZero(Math.floor(currentTime % 60))}`;

  // format total time in minutes:seconds
  const formattedTotalTime = `${padWithZero(
    Math.floor(totalTime / 60)
  )}:${padWithZero(Math.floor(totalTime % 60))}`;

  return `${formattedCurrentTime} of ${formattedTotalTime}`;
}

const currentTimeInSeconds = 125;
const totalTimeInSeconds = 3600;

const formattedTime = formatTime(currentTimeInSeconds, totalTimeInSeconds);
console.log(formattedTime); // 02:05 of 60:00
