// JavaScript - Collection Types
// Objects and collections: object literals, array, functions, date objects, regulafr expressions, Math object, Error, Typed Arrays, Maps, Sets, Promises, and Classes
let info = {
  name: "Peter",
  dog: "Kota",
};

// Array
const arr = [1, 2, 3];
// Native Methods: push, pop, shift, unshift, slice, splice, map, filter, reduce, forEach

// Object (can act like a hash table)
const obj = { key1: "value1", key2: "value2" };
// Native Methods: Object.keys, Object.values, Object.entries

// Set
const mySet = new Set([1, 2, 3]);
// Native Methods: add, delete, has, clear

// Map
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
// Native Methods: set, get, delete, has, clear

// Object Wrappers for primitive types - String, Number, Boolean, BigInt, and Symbol
// objects in JavaScript can store multiple values and have methods and consructors
// Boxing - When you try to access a property or method on a primitive, JavaScript temporarily "boxes" the primitive into its corresponding object type. This is done implicitly by the JavaScript engine.
// The reverse process, where an object is converted back into a primitive, is known as unboxing. This can be done explicitly using methods like valueOf or toString.
let myString = "hello";
console.log(myString.length); // 5

// In Operator
let car = { make: "Toyota", model: "Corolla" };
console.log("make" in car); // true

// Delete Operator
let myObj = { name: "Alice", age: 25 };
console.log(myObj); // { name: "Alice", age: 25 }
delete myObj.age; // 25
console.log(myObj); // { name: "Alice" }

// Object property descriptors, enumeration
