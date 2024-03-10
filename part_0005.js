/**
 * refer: https://www.freecodecamp.org/news/javascript-tips-for-better-web-dev-projects/
 * Tip 21: Use the Web Audio API to Work with Audio Files
 * Tip 22: Use the Web Video API to Work with Video Files
 * Tip 23: Preserve Object Integrity by Sealing and Freezing Them
 * Tip 24: Use async...await For Asynchronous Operations
 * Tip 25: Clone Objects with the Spread Operator, Object.assign(), and JSON.parse()
 */

// Tip 23
const personKolade = {
  name: 'Kolade',
  luckyNum: 10,
  footballFan: true,
  clud: 'Chelsea',
};

Object.seal(personKolade); // seal the object

console.log(personKolade.name);

personKolade.favPet = 'Cat'; // cannot add new properties to sealed object
console.log(personKolade.favPet); // undefined

delete personKolade.clud;
console.log(personKolade.clud); // Chelsea, cannot remove properties from sealed object

personKolade.name = 'Kolade Chris';
console.log(personKolade.name);

console.log(Object.isSealed(personKolade)); // true
console.log(Object.isFrozen(personKolade)); // false

const personJane = {
  name: 'Jane',
  luckyNum: 11,
  footballFan: true,
  club: ' Man United',
};

Object.freeze(personJane); // freeze the object (automatically sealed)

console.log(personJane.name);

personJane.favPet = 'Cat'; // cannot add new properties to frozen object
console.log(personJane.favPet); // undefined

delete personJane.clud;
console.log(personJane.club); // Man United, cannot remove properties from frozen object

personJane.name = 'Jane Doe'; // FREEZE IS STRONGER COMPARE TO SEAL
console.log(personJane.name); // Jane, nothing changes

console.log(Object.isSealed(personJane)); // true
console.log(Object.isFrozen(personJane)); // true

// Tip 24
function fetchDataByPromise() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json)
    .then((data) => console.log(data))
    .catch((error) => console.error(`There was an error: ${error}`));
}

async function fetchDataByAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

async function fetchDataByAsyncWithCatch() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`There was an error: ${error}`);
  }
}

const fetchDataByAsyncWithArrow = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`There was an error: ${error}`);
  }
};

// Tip 25
const originalObject = {
  name: 'Kolade',
  lukcyNum: 10,
  footballFan: true,
  club: 'Chelsea',
};

const cloneObjectBySpread = { ...originalObject };

const cloneObjectByAssign = Object.assign({}, originalObject);

const cloneObjectByJSON = JSON.parse(JSON.stringify(originalObject));

console.table(cloneObjectBySpread);
console.table(cloneObjectByAssign);
console.table(cloneObjectByJSON);

// structuredClone added in ECMAScript 2019
// const cloneObjectByStructured = structuredClone(originalObject);
// console.table(cloneObjectByStructured);
