/**
 * refer: https://www.freecodecamp.org/news/javascript-tips-for-better-web-dev-projects/
 * Tip 1: Use console.table() to Display Arrays and Objects in the Console
 * Tip 2: Use Template Interpolation to Render Strings Instead of the Assignment Operator
 * Tip 3: Convert Strings to Numbers with Unary Plus and Number Constructor
 * Tip 4: You Don’t Need to Declare Every Variable with a Keyword
 * Tip 5: Use console.group() with Multiple console.log()s to Group Related Items to the Console
 */

// Tip 1
const myArr = ['kolade', 'chelsea', 10, true];

console.log(myArr);
console.table(myArr);
console.log('\n');

const myObj = {
  name: 'kolade',
  luckyNum: 10,
  lovesFootball: true,
};

console.log(myObj);
console.table(myObj);
console.log('\n');

// Tip 2
const name = 'john doe';
const age = 20;

const plusConcat =
  'Hi there 👋🏽 \nMy name is ' + name + ' and I am ' + age + ' years old';
const templateLiteralConcat = `Hi there 👋🏽 \nMy name is ${name} and I am ${age} years old`;

console.log(plusConcat);
console.log(templateLiteralConcat);
console.log('\n');

// Tip 3
const myNum = '5';

convertNum1 = +myNum; // unary plus
convertNum2 = Number(myNum); // Number constructor

console.log(convertNum1, typeof convertNum1);
console.log(convertNum2, typeof convertNum2);
console.log('\n');

// Tip 4
let x, y, z;

x = 1;
y = 2;
z = 3;

console.log(x, y, z);

const a = 'Hello',
  b = 'How are u today',
  c = 'Are you coding today';

console.log(a);
console.log(b);
console.log(c);
console.log('\n');

// Tip 5
console.group('Bio');

console.log('My name is kolade');
console.warn("I don't like to be late");
console.error('You came late');
console.log('\n');

console.groupEnd();
