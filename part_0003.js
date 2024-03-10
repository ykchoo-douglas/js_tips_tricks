/**
 * refer: https://www.freecodecamp.org/news/javascript-tips-for-better-web-dev-projects/
 * Tip 11: Use the Spread Operator to Copy and Merge Arrays
 * Tip 12: Use Arrow Syntax to Write Shorter and More Elegant Functions
 * Tip 13: Use Destructuring to Extract Properties from Objects
 * Tip 14: Use the startsWith() and endsWith() String Methods to Get the Start and End of a String
 * Tip 15: Use the trim(), trimStart(), and trimEnd() to Handle White Spaces
 */

// Tip 11, spread operator can
// copying array, mergin arrays, cloning objects, passing multiple arguments to function

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.table(originalArray); // [1, 2, 3]
console.table(copiedArray); // [1, 2, 3]

const moreArray = [4, 5, 6];

const mergedArray = [...originalArray, ...moreArray];
console.table(mergedArray); // [1, 2, 3, 4, 5, 6]
console.log(mergedArray);

const originalObj = {
  name: 'John',
  age: 30,
  career: { company: 'Siemens', function: 'Engineer' },
};
const cloneObj = { ...originalObj }; // is deep clone

originalObj.job = 'Progammer';
console.table(cloneObj);
console.log(cloneObj);

deepCloneObj = JSON.parse(JSON.stringify(cloneObj)); // alternate way to clone object
console.table(deepCloneObj);
console.log(deepCloneObj);

function addNumbers(a, b, c) {
  return a + b + c;
}

const numbers = [10, 12, 8];
const sum = addNumbers(...numbers);

console.log(sum); // 30

// Tip 12
function addTwoNumber(a, b) {
  return a + b;
}

const addTwoNumberModern = (a, b) => a + b;

console.log(addTwoNumber(3, 4));
console.log(addTwoNumberModern(3, 4));

const numberSet = [3, 4];

const square = numberSet.map(function (num) {
  // array map function return new array
  return num * num;
});

const squareModern = numberSet.map((num) => num * num);

console.log(square); // [9, 16]
console.log(squareModern); // [9, 16]

// Tip 13
const person = {
  name: 'John Doe',
  age: 30,
  gender: 'male',
};

const nameJohn = person.name;
const ageJohn = person.age;
const genderJohn = person.gender;

console.log(nameJohn, ageJohn, genderJohn); // John Doe 30 male

const { name, age, gender, job = 'Engineer' } = person;

console.log(name, age, gender, job); // John Doe 30 male

// Tip 14
const message = 'Hello World';

console.log(message.startsWith('H')); // true
console.log(message.startsWith('h')); // false
console.log(message.endsWith('d')); // true
console.log(message.endsWith('D')); // false

const files = [
  'text.txt',
  'document.txt',
  'image.jpg',
  'script.js',
  'docs.txt',
];

const textFiles = files.filter((file) => file.endsWith('.txt'));
console.table(textFiles); // ['text.txt', 'document.txt', 'docs.txt']

const text = 'Welcome to freeCodeCamp';
console.log(text.startsWith('W', 0)); // true
console.log(text.startsWith('freeCodeCamp', 11)); // true
console.log(text.endsWith('f', 11)); // false
console.log(text.startsWith('f', 11)); // true

// Tip 15
const greet = '    Hello World    ';
console.log(greet, '...continue');
console.log(greet.trim(), '...continue'); // Hello World
console.log(greet.trimStart(), '...continue');
console.log(greet.trimEnd(), '...continue');

const input = '   ';
const answer =
  input.trim === ''
    ? 'the input is empty'
    : 'the input contains non-whitespace characters';
console.log(answer); // the input contains non-whitespace characters
