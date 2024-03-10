/**
 * refer: https://www.freecodecamp.org/news/javascript-tips-for-better-web-dev-projects/
 * Tip 16: Use replace() with the toUpperCase() and toLowerCase() Methods to Convert Between Cases
 * Tip 17: Use the Array.from() Method to Create Arrays from Array-like Objects or Iterables
 * Tip 18: Use the map() Method to Transform all the Elements of an Array
 * Tip 19: Use the filter() Method to Filter Through Arrays
 * Tip 20: Use the forEach() Method to Loop Through Arrays
 */

// Tip 16
function toTitleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

console.log(toTitleCase('welcome to twitter (now X)'));

function toSnakeCase(str) {
  return str.toLowerCase().replace(/\s+/g, '_');
}

console.log(toSnakeCase('Convert this to snake case'));

function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(toSentenceCase('hELLo, TwEeps! HOW ARE YOU TODAY?'));

// Tip 17
function sumArguments() {
  const argsArray = Array.from(arguments); // the 'arguments object is array-like
  console.log(argsArray);
  return argsArray.reduce((acc, num) => acc + num, 0);
}

console.log(sumArguments(1, 2, 3, 4, 5));

// example for HTML
/* <ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
  <li>List item 4</li>
<ul/>

const listItems = document.querySelectorAll('li');
const itemsArray = Array.from(listItems);

itemsArray.forEach(item => {
  console.log(item.textContent)
}); */

// Tip 18
const numbers = [1, 4, 9, 16, 25];
const squareRoots = numbers.map((num) => Math.sqrt(num)); // create new array
console.log(squareRoots); // [1, 2, 3, 4, 5]

const names = ['john', 'jane', 'smith'];
const capitalizedNames = names.map((name) => name.toUpperCase());
console.log(capitalizedNames); // ['JOHN', 'JANE', 'SMITH']

// Tip 19
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const oddNums = nums.filter((num) => num % 2 !== 0); // create new array
const evenNums = nums.filter((num) => num % 2 === 0);

console.table(oddNums);
console.table(evenNums);

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 },
  { id: 4, name: 'Headphones', price: 100 },
];

const cheapProducts = products.filter((product) => product.price < 500);
console.table(cheapProducts);

// Tip 20
const fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((fruit) => console.log(fruit));
