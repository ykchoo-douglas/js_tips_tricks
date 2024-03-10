/**
 * refer: https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/
 * refer: https://www.sohamkamani.com/javascript/enums/
 * Tip 1: How to Export Modules in Node
 * Tip 2: Using Enums In Javascript
 */

// Tip 1
function addTwoNumber(a, b) {
  return a + b;
}

// NOTES:
// The exports keyword is a reference to the exports object in the modules object
// module.exports = ... is a way of reassigning a new object to the exports property
// by using module.exports can overwrite the exports
// exports keyword is a quick way to export values

module.exports = { addTwoNumber };
// OR exports.addTwoNumber = addTwoNumber

// require is CommonJS
// require statement in another sheet const { addTwoNumber } = require('./part_0020')

console.log(module);
// ....
// exports: { addTwoNumber: [Function: addTwoNumber] },

// Tip 2
const SEASON = Object.freeze({
  SUMMER: Symbol('summer'),
  AUTUMN: Symbol('autumn'),
  WINTER: Symbol('winter'),
  SPRING: Symbol('spring'),
});

// Symbol create unique value
const summer2024 = Symbol('summer');
const summer2023 = Symbol('summer');

console.log(summer2023 === summer2024); // false
console.log(Object.isFrozen(SEASON)); // true

const season = SEASON.SPRING;
switch (season) {
  case SEASON.SUMMER:
    console.log('is summer');
    break;
  case SEASON.AUTUMN:
    console.log('is autumn');
    break;
  case SEASON.WINTER:
    console.log('is winter');
    break;
  case SEASON.SPRING:
    console.log('is spring');
    break;
  default:
    console.log('season is undefined');
}

class SEASON_CLASS {
  static SUMMER = new SEASON_CLASS('summer');
  static AUTUMN = new SEASON_CLASS('autumn');
  static WINTER = new SEASON_CLASS('winter');
  static SPRING = new SEASON_CLASS('spring');

  constructor(name) {
    this.name = name;
  }
}

let autumn = SEASON_CLASS.AUTUMN; // identify the variable from same class
console.log(autumn instanceof SEASON_CLASS); // true
console.log(Symbol('autumn') instanceof SEASON_CLASS); // false
console.log(autumn.constructor.name); // SEASON_CLASS
Object.keys(SEASON_CLASS).forEach((season) => console.log(season)); // SUMMER, AUTUMN, WINTER, SPRING
