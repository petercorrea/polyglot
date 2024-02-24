### JavaScript Variables and Scope

In JavaScript, the way variables are declared, scoped, and hoisted can significantly affect the behavior of your code. The choice between `var`, `let`, and `const` not only impacts the variable's lifecycle but also introduces subtleties that can lead to common misconceptions, especially regarding immutability and scope.

#### Variable Declaration and Scope

- **`var`**: Declares a variable, optionally initializing it to a value. Variables declared with `var` are either function-scoped or globally scoped, which can lead to unexpected behavior if not carefully managed. A common misconception is that a `var` variable would be block-scoped (like in other C-like languages), but this is not the case in JavaScript.
  
- **`let`**: Introduces a block-scoped local variable, optionally initializing it to a value. Unlike `var`, `let` respects block scope (`{}`), making it a safer choice for controlling variable lifecycles within loops and conditional blocks.

- **`const`**: Declares a block-scoped variable, but unlike `var` and `let`, variables declared with `const` must be initialized at the time of declaration. The common misconception with `const` is regarding its immutability; while `const` prevents reassignment of the variable identifier, it does not make the value it holds immutable. For example, objects or arrays declared with `const` can still have their contents altered.

#### Hoisting and the Temporal Dead Zone (TDZ)

- **Hoisting**: JavaScript hoists variable declarations (and function declarations) to the top of their scope before code execution. However, initializations are not hoisted. This behavior is more pronounced with `var`, leading to situations where variables can be used before they are declared, resulting in `undefined` values rather than reference errors.

- **TDZ for `let` and `const`**: Variables declared with `let` and `const` are also hoisted but not initialized, creating a temporal dead zone from the start of the block until the declaration is encountered. Accessing a `let` or `const` variable in its TDZ results in a ReferenceError, highlighting a crucial difference from `var`.

#### Closures

Closures allow a function to access variables from an enclosing scope, even after that scope has closed.

### Code Examples with Common Misconceptions

#### `var` Misconception: Block Scope

```javascript
if (true) {
    var exampleVar = "I exist everywhere!";
}
console.log(exampleVar); // "I exist everywhere!", not block-scoped but function/global scoped
```

#### `const` Misconception: Immutability

```javascript
const MY_OBJECT = {'key': 'value'};
// While we cannot reassign MY_OBJECT, we can mutate its properties
MY_OBJECT.key = 'otherValue'; // This is perfectly fine
console.log(MY_OBJECT.key); // "otherValue"

// However, attempting to rebind the constant to a new object throws an error
// MY_OBJECT = {'otherKey': 'value'}; // TypeError: Assignment to constant variable.
```

#### Hoisting Example with `var` vs. `let`

```javascript
console.log(hoistedVar); // undefined due to hoisting
var hoistedVar = 5;

// Accessing a `let` variable before declaration throws a ReferenceError
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 10;
```
