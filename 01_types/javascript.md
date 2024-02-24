### JavaScript Types Overview

JavaScript's type system is dynamic and loosely typed, meaning variables do not have a fixed type and can be reassigned to different types. This flexibility allows for rapid development but requires careful management to avoid type-related bugs.

#### Primitive Types

- **Number**: Represents both integer and floating-point values.
- **String**: Represents textual data.
- **Boolean**: Represents a logical entity with two values: `true` and `false`.
- **Undefined**: Represents a variable that has not been assigned a value.
- **Null**: Represents the intentional absence of any object value.
- **Symbol**: A unique and immutable primitive introduced in ES6 for unique property keys.
- **BigInt**: Represents integers with arbitrary precision.

#### Complex Types

- **Object**: Collections of properties, where each property is a key-value pair. Functions are a special type of object.

#### Type Coercion

JavaScript performs type coercion automatically under certain circumstances, converting values from one type to another when the context requires it. This can lead to unexpected results if not properly understood.

#### Functions

Functions in JavaScript are first-class objects, meaning they can be stored in variables, passed as arguments to other functions, and returned from functions.

#### Arrays

Arrays in JavaScript are objects used to store multiple values in a single variable. They can contain elements of any type, including other arrays.

### Code Examples

#### Primitive Types

```javascript
let num = 42; // Number
let str = "Hello, world!"; // String
let flag = true; // Boolean
let notDefined; // Undefined
let empty = null; // Null
let uniqueId = Symbol('id'); // Symbol
let largeNumber = BigInt(9007199254740991); // BigInt

console.log(num, str, flag, notDefined, empty, uniqueId, largeNumber);
```

#### Complex Type: Object

```javascript
let person = {
    name: "John Doe",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Accessing method of an object
```

#### Arrays and Functions

```javascript
let array = [1, 'two', true, {name: 'John'}, function() { console.log('Hello'); }];
array[4](); // Accessing and calling a function stored in an array

function multiply(x, y) {
    return x * y;
}

let result = multiply(2, 3);
console.log(result);
```

#### Type Coercion

```javascript
let result = '3' + 2; // '32', string concatenation
console.log(result);

result = '3' - 1; // 2, numeric subtraction
console.log(result);

if ('0') {
    console.log('0 is truthy in JavaScript!'); // This block will execute
}
```
