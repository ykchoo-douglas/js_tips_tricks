/**
 * refer: https://dev.to/zidniryi/advanced-regex-with-modern-javascript-complete-guide-1d4d
 * Subject: Regular Expression, Regex
 * Tip 1: Understanding the basic
 * Tip 2: Regex For Number
 * Tip 3: Regex For Match Lowercase
 */

// Tip 1
/**
 * \ followed by any of [\^$.|?*+(){}
 * ^ = start with
 * ? = optional
 * * = zero or more
 * + = one or more
 * () = group
 * \d = [0-9] digit
 */

// Tip 2
/**
 * ^ = start with
 * \d* = zero or more digits
 * (\.\d+)? = optional decimal point followed by one or more digits. The parantheses to group the decimal points and digits together
 * $ = end
 */
const regNum = /^\d*(\.\d+)?$/;
console.group('Match for number only');
console.log('1 = ', regNum.test('1')); // true
console.log('123 = ', regNum.test('123')); // true
console.log('12.3 = ', regNum.test('12.3')); // true
console.log('0.456 = ', regNum.test('0.456')); // true
console.log('12.3.45 = ', regNum.test('12.3.45')); // false
console.log('12.a = ', regNum.test('12.a')); // false
console.log('abc = ', regNum.test('abc')); // false
console.log('.3 = ', regNum.test('.3')); // true
console.log('. = ', regNum.test('.')); // false
console.log('1. = ', regNum.test('1.')); // false
console.log('-1.0 = ', regNum.test('-1.0')); // false
console.groupEnd();

// Tip 3
const regLowerCase = /^[a-z]+$/;
console.group('Match for string and lower case only');
console.log('a = ', regLowerCase.test('a')); // true
console.log('abcedghij = ', regLowerCase.test('abcedghij')); // true
console.log('A = ', regLowerCase.test('A')); // false
console.log('Ab = ', regLowerCase.test('Ab')); // false
console.log('aB = ', regLowerCase.test('aB')); // false
console.log('123abc = ', regLowerCase.test('123abc')); // false
console.log('abc123 = ', regLowerCase.test('abc123')); // false
console.log('Hello = ', regLowerCase.test('Hello')); // false
console.groupEnd();
