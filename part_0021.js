/**
 * refer: https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/
 * Tip 1: use constructor function to do OOP
 * Tip 2: use class to do OOP
 * Tip 3: use case
 */

// Tip 1
function Pen(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}

Pen.prototype.showPrice = function () {
  console.log(`Price of ${this.name} is ${this.price}`);
};

const penBlue = new Pen('Marker', 'Blue', '$3');
// console.dir(penBlue);
// penBlue.showPrice();

// Tip 2
class Car {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }

  showPrice() {
    console.log(`Price of ${this.name} is ${this.price}`);
  }
}

const carRed = new Car('Tesla', 'Red', '$220000');
// console.log(carRed);
// carRed.showPrice();

// Tip 3
class Chair {
  static warranty = true;
  static yearOfWarranty = 1;

  constructor(
    color,
    seatHeight,
    recliningAngle,
    backSupport,
    headSupport,
    padding,
    armRests,
    seatSize,
    isHeightAdjustable,
    isMovable
  ) {
    this._color = color || 'Red';
    this.seatHeight = seatHeight;
    this.recliningAngle = recliningAngle;
    this.backSupport = backSupport || true;
    this.headSupport = headSupport || false;
    this.padding = padding || '3 inch';
    this.armRests = armRests || true;
    this.seatSize = seatSize || '16 inch';
    this.isHeightAdjustable = isHeightAdjustable || false;
    this.isMovable = isMovable || false;
    this.type = 'Chair';
    Chair.logDefaultProps(); // call static method inside constructor
  }

  get color() {
    return this._color;
  }

  set color(colorName) {
    colorName = colorName.trim();
    if (colorName === '') {
      throw 'The color name cannot be empty';
    }
    this._color = colorName;
  }

  adjustableHeigth() {}
  adjustAngle() {}
  moveChair() {}

  static logObjectProps() {
    console.dir(this);
  }

  static logDefaultProps() {
    console.log(`Chair has warranty = ${this.warranty}`);
    console.log(`Chair has year of warranty = ${this.yearOfWarranty}`);
  }
}

const chairBlue = new Chair(
  'Blue',
  '25 inch',
  '20 deg',
  true,
  false,
  '3 inch',
  true,
  '16 inch',
  false,
  false
);

const chairDefault = new Chair();

// console.dir(`Chair Prototype \n${Chair}`);
// console.log(`Chair Object`);
// console.table(chairBlue);
// console.table(chairDefault);

class OfficeChair extends Chair {
  // private properties for OfficeChair only
  #basePrice = 888;

  constructor(color, isHeightAdjustable, seatHeight, recliningAngle) {
    super(); // must call to access all the attributes and functions of the parent class
    this._color = color || 'Red';
    this.seatHeight = seatHeight;
    this.isHeightAdjustable = isHeightAdjustable || false;
    this.isMovable = true;
    this.recliningAngle = recliningAngle;
    this.type = 'Office Chair';
    this.#basePrice = 1000;
  }

  adjustableHeigth(height) {
    if (height > this.seatHeight) {
      console.log(`Chair height changed to ${height}`);
    } else {
      console.log(
        `Height cannot lower than the seat height ${this.seatHeight}`
      );
    }
  }

  adjustAngle(angle) {
    if (angle >= this.recliningAngle) {
      console.log(`Chair angle changed to ${angle}`);
    } else {
      console.log(
        `Chair cannot turn to min reclining angle ${this.recliningAngle}`
      );
    }
  }

  moveChair(x, y) {
    console.log(`Chair moved to position = X:${x}, Y:${y}`);
  }

  #getChairSellingPrice(taxChargePercentage) {
    return this.#basePrice + (taxChargePercentage / 100) * this.#basePrice;
  }

  logChairPrice() {
    console.log(`Chair selling price = ${this.#getChairSellingPrice(20)}`);
  }
}

const officeChairBlue = new OfficeChair('Blue', true, 30, 45);
console.log(officeChairBlue.adjustableHeigth(31));

console.log('Chair');
console.log(Chair.warranty);
console.log(Chair.yearOfWarranty);
Chair.logObjectProps();

console.log('OfficeChair');
console.log(OfficeChair.warranty);
console.log(OfficeChair.yearOfWarranty);
OfficeChair.logObjectProps();

console.log(chairBlue.underWarranty); // undefined
console.log(officeChairBlue.yearOfWarranty); // undefined
// chairBlue.logObjectProps(); // throw error
Chair.logDefaultProps();
OfficeChair.logDefaultProps();
officeChairBlue.logChairPrice();
// OfficeChair.logChairPrice(); // throw error

chairBlue.color = 'yellow';
console.log(chairBlue);
console.log(chairBlue.color);

officeChairBlue.color = 'pink';
console.log(officeChairBlue);
console.log(officeChairBlue.color);
