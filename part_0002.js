/**
 * refer: https://www.freecodecamp.org/news/javascript-tips-for-better-web-dev-projects/
 * Tip 6: Style your Console Output with the %c Specifier (browser console)
 * Tip 7: How Math.floor(Math.random() * n1 + n2) Generates a Random Number Between n1 and n2
 * Tip 8: Methods of the Math Object
 * Tip 9: Capitalize the First Letter of Any Word
 * Tip 10: Destructure Arrays with Default Values to Avoid Getting undefined
 */

// Tip 6
const styles = `padding: 15px;
                background-color: #2ecc71;
                color: black;`;

console.log('%c Hello, everyone!', styles);
console.log(
  '%c Hello, everyone!',
  'padding:15px; background-color: #2ecc71; color: black;'
);

// Tip 7
const randomTo100 = Math.floor(Math.random() * 100 + 1);
console.log(`the number ${randomTo100} is between 1 to 100`);
const randomTo99 = Math.floor(Math.random() * 100);
console.log(`the number ${randomTo99} is between 0 to 99`);

// Tip 8
console.log(Math.sqrt(9)); // 3
console.log(Math.abs(-5)); // 5
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5, round up to nearest whole number
console.log(Math.floor(4.9)); // 4, round down a number
console.log(Math.pow(2, 4)); // 16, exponent of number
console.log(Math.min(4, 5, 2)); // 2
console.log(Math.max(4, 5, 2)); // 5
console.log(Math.random()); // random number/decimal between 0 and 1
const randomVal = Math.random();
console.log(randomVal);
console.log(randomVal * 100);
console.log(Math.floor(randomVal * 100));

// Tip 9
const lastname = 'john';
const capitalizedStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizedStr(lastname));
console.log(capitalizedStr('doe'));
console.log(lastname.charAt(0));
console.log(lastname.charAt(0).toUpperCase());
console.log(lastname.slice(1));

// Tip 10
// array
const fruits = ['Apple', 'Banana'];
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // Apple
console.log(secondFruit); // Banana
console.log(thirdFruit); // undefined !!!

const [fruit1, fruit2, fruit3 = 'Orange'] = fruits; // fruit3 with default value
console.log(fruit1); // Apple
console.log(fruit2); // Banana
console.log(fruit3); // Orange

// object
const person = { name: 'John Doe', age: 30 };
const { name, age, occupation } = person;
console.log(name); // John Doe
console.log(age); // 30
console.log(occupation); // undefined !!!

const { name2, age2, occupation2 = 'Programmer' } = person;
console.log(name2); // undefined, name2 is not same with name !
console.log(age2); // undefined, age2 is not same with age
console.log(occupation2); // Programmer

const { firstName = 'John' } = person;
console.log(firstName); // John, default value. NO firstName properties in the Person object
