// A line starting with '//' is a comment. 
// Comments are used by the developer to write text for others to read.
// Comments are ignored by the program. They have no implication on the program.

// Programs store information in the form of variables.
// Variables consists of a unique name, called an identifier, and usually hold some value by assigning the date with '='.
// We end each complete line with a ';'.
let hi = "Hello, World"; // this variable is called 'hi' and it contains the text 'Hello, World'.
let bye;
// 'let' is a special keyword to tell the program we are going to create a variable.
// Here's some jargon:
//    When assigning a value to a variable we say we 'defined' the variable and 'initialized' it with some data.
//    When we don't assign a value we say we 'declared' a variable.
// Here we 'defined' the variable 'hi' with the text 'Hello, World'.
// And we 'declared' the variable bye without any associated data.
// Always declare variables before using them.

// The act of displaying text onto the screen is called 'printing'
// We can print our text by placing it between the two parenthesis of this special bit of code 'console.log();' and letting the program execute. 
console.log(hi); // this will print 'hi'.

// We can start to see one benefit of variables, they help use to reuse code without repeating ourselves.
// This will also make it easier to read and reason about our code.
// Code reuse and avoiding repetition are common themes will you continue to hear in your software journey.

// Besides an identifier and a value, a variable has an associated type.
// In the everyday world, we can consider text and numbers as two different types of data.
// In programming, text is reffered to as 'strings', and we often call numbers 'integers'.

// In JavaScript there are 7 basic types, we call these Primitive Types.
let name = "Peter"; // String, simply text wrapped in double qoutes.
let age = 34; // Number
let isHuman = true; // Boolean, true or false.
let breakfast = null; // null, an assigned value of nothing.
let x; // undefined, contains no assigned value, we say 'x' is 'uninitialized'.
let largeNumber = 9007199254740991n; // The 'n' at the end denotes a BigInt, for numbers outside the range of -2^53 + 1 and 2^53 - 1 (inclusive).
let id = Symbol("id"); // Symbol, generates a unique id.

// We can also perform multiple assignments in one go.
let a = 1,
  b = 2;

// The act of assigning a new value to a variable is called 'reassigning' and we omit the 'let' keyword.
a = 5;

// Arithmetic Operators allow us to perform calculations.
a + b; // Addition: 7
a - b; // Subtraction: 3
a * b; // Multiplication: 10
a / b; // Division: 2.5
a % b; // Modulus (Remainder): 1
a ** b; // Exponentiation: 25

// Assignment Operators are a hybrid of the Assignment Operator and Arithmetic Operators, they're a two-for-one.
// They perform the relevent operation and assign the resulting value to the variable.
x = 10; // Reassignment, now 'x' holds the value 10.
x += 5; // Addition assignment, add 5, and then reassign the result, 15, to 'x'.
x -= 5; // Subtraction assignment
x *= 5; // Multiplication assignment
x /= 5; // Division assignment
x %= 5; // Remainder assignment
x **= 5; // Exponentiation assignment
console.log(x) // 32

// String Operators
// Numbers arnt the only things we can operate on, we can operate on strings as well using '+'. 
// This is called string concatenation.
let text1 = "Hello";
let text2 = "World";
let result = text1 + " " + text2;
console.log(result); // "Hello World"

// Comparison Operators
a = 5, b = 5, c = 10;
console.log(a == b); // Equality: true
console.log(a != b); // Inequality: false
console.log(a < c); // Less than: true
console.log(a > c); // Greater than: false
console.log(a <= c); // Less than or equal to: true
console.log(a >= c); // Greater than or equal to: true

// Logical Operators
a = true, b = false, c = "default";
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// Ternary (Conditional) Operator
// If the result of the between assignment (=) and the '?' is true,
// return the first operand (before the ':'), 
// otherwise return the second operand (after the ':').
age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // "Yes"

// Nullish Coalescing Operator, 
// If the first operand is either null or undefined, 
// return the second operand, otherwise return the first operand.
console.log("hi" ?? c);  // "hi"
console.log(undefined ?? c);  // "default"

// Typeof Operators
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null) // QUIRK ALERT: type of null is 'object', not 'null' despite being a type, a historical quirk regarding type tagging.

// Bitwise Operators
// If you arn't familir with binary numbers, feel free to skip this section.
a = 5; // (binary 0101)
b = 3; // (binary 0011)
console.log(a & b); // AND: 1 (binary 0001)
console.log(a | b); // OR: 7 (binary 0111)
console.log(a ^ b); // XOR: 6 (binary 0110)
console.log(~a); // NOT: -6
console.log(a << b); // Left shift: 40
console.log(a >> b); // Right shift: 0
console.log(a >>> 1); // Zero fill right shift: 2

// Loose Typing
// JavaScript is a loosely typed or dynamic language,
// meaning you don't need to declare types of variables ahead of time,
// and the type of a variable can change during the execution of a program.
x; // x is undefined
console.log(typeof x); // "undefined"
x = 5; // x is now a number
console.log(typeof x); // "number"
x = "Hello"; // x is now a string
console.log(typeof x); // "string"
x = false; // x is now a boolean
console.log(typeof x); // "boolean"

// Truthy and Falsy
// Every value has an inherent boolean value.
// Values can be classified as either "truthy" or "falsy."
console.log(false == false); // true, this makes sense
// While 0 is an integer and false is a boolean, JavaScript will
// intepret 0 to be a false-like value.
console.log(0 == false); // true
// A few more examples
console.log(-0 == false); // true
console.log(0n == false); // true
console.log("" == false); // true
console.log("" == false); // true
console.log(`` == false); // true
console.log(null == false); // true
console.log(undefined == false); // true
console.log(null == undefined); // true - null and undefined are considered equal
console.log("" == 0); // true - Empty string is converted to a number
// Anything else is consider Truthy, this includes objects, functions, arrays; even empty ones

// NaN
// NaN stands for 'Not a Number'. 
// QUIRK ALERT: Oddly, it's type is in fact 'number' and it's a falsy value.
console.log(NaN == false); // true
// QUIRK ALERT: NaN is not equal to any value, including itself.
console.log(NaN == NaN); // false, 
// The rationale behind NaN not being equal to itself
// is to ensure that NaN values propagate through computations.
// If you perform a calculation that results in NaN,
// further calculations using this result continue to yield NaN.
// This behavior signals that something has gone wrong in the computation chain,
// and the exact point where it went wrong is not treated as equal to any other failing point.
// Instead we use 'isNaN()' to help us determine if a value is NaN.

// Implicit Type Cohersion
// Implicit type coercion occurs when the language automatically converts values from one data type to another type,
// such as converting a number to a string or vice versa. This behavior can sometimes lead to unexpected results.
// The conversion depends on the context, and which operator is being used.
// A string added to anything else using '+' returns a string
let message = "Result is " + true; // returns the string "Result is true"
result = "3" + 2; // "32"
// Comparing two strings returns a boolean that compares the length of the strings
let comparison = "4" < "12"; // false
// Comparing a string and a number will convert the number to a string
console.log(5 == "5"); // true
result = "0" == 0; // true
// Subtracting two strings returns a number as both strings are converted to a number
result = "4" - "2"; // 2
result = "5" - 3; // 2 

// Revisiting the && and || operators.
// && and || These operators return a boolean value when one of its operands is boolean.
// But when both operands are non-booleans it returns one of the two operands based on their respective Truthyness and adhere to the following rules:
// If the First Operand is Truthy:
//    && operator returns the second operand,
//    || returns the first operand.
// If the First Operand is Falsy:
//    && operator returns the first operand without evaluating the second,
//    || returns the second operand...used for seting default values and short circuiting logic
result = "Truthy" && "This operand is returned";
result = "" && "First operand is returned";
result = "Truthy" || "First operand is returned";
result = "" || "This operand is returned";

// Strict Equality Operator
// This operator will only return true if both the value and the types match.
console.log(5 === "5"); // false - Different types (number and string)
console.log(0 === false); // false - Different types (number and boolean)
console.log("" === 0); // false - Different types (string and number)
console.log(null === undefined); // false - Different values and types
console.log(NaN === NaN); // false - NaN is never equal to itself, isNaN() must be used.

// Explicit Conversion
let num = Number("123"); // converts string to number
let str = (123).toString(); // converts number to string
let integer = parseInt("42", 10);
let float = parseFloat("3.14");
let value = 10;
message = `Value is ${value}`; // "Value is 10"

// Besides Primitive Types we also have Complex Types that we'll discuss later, but one is worth mentioning now, Object Literals.
// They're simply containers that hold multiple pieces of data. Each piece is called a property.
// Each property has a unique key, and a value.
let person = {
  name: "Peter", // this property has the key 'name' and is holding the value 'Peter'
  age: 24
};
// We can then grab a property like so,
let who = person.name; // who is now assigned the value 'Peter'.
console.log(who) // Peter

// Values and References
// Data can either be copied or shared. In JavaScript, primitive types are always copied, Complex Types are shared.
// When copying a primitive type, we call this 'copy by value'.
let original = 50;
let copy = original; // Copy by value, both 'original' and 'copy' are assigned the value 50
copy += 50; // Changing 'copy' doesn't affect 'original'
console.log(original); // 50 (remains unchanged)
console.log(copy); // 100 (changed independently)

// When copying anything else, like objects, we call this 'copy by reference'.
let originalObject = { value: 50 };
let copyObject = originalObject; // Copy by reference
copyObject.value = 100; // Changing 'copyObject' also changes 'originalObject'
console.log(originalObject.value); // 100 (changes reflected)
console.log(copyObject.value); // 100 (changed)
// The rational behind this is that Objects hold much more memory, and since memory is a finite resource
// the assumption is made that by default we'll share objects and only copy them when we really need to.

// Reassignability
// Refers to the ability of an identifier to be reassigned a new value.
// 'let' allows the identifier to be reassigned to a new value.
// 'const', short for constant, prevents an identifier from being reassigned.
let car = 'Sedan';
car = 'Van'; // This is OK, 'car' has been reassigned to 'Van'.
const dog = 'Bark';
// dog = 'Meow'; // JavaScript will display an error and disallow reassignment of the constant 'dog'.

// Immutability
// Immutability refers to whether the value a variable points to can be changed.
// The word 'mutable' implies a variable's value can change, while 'immutable' implies it cannot.
// In JavaScript, a value's data type determines its mutability.
// The values of primitive types (like numbers, strings, booleans) are immutable – they can't be altered.
// However, objects (including arrays and functions) are mutable – their properties can be changed.
// Declaring an object with 'const' only means that the variable cannot be reassigned to a different value,
// but the properties of the object can still be modified.
const broccoli = {
  type: "vegetable",
  color: "green"
};
broccoli.color = "red";
console.log(broccoli.color); // Outputs: red

// Blocks and Scope
// When a program is executing code, it will read the code top to bottom, left to right.
// A program can 'remember' what came before a certain line, but it never 'reads' up.
// Blocks help us structure and organize our code into different sections. We use curley braces {} to denote the begining and end of a block.

// <--- Everything out here is in global scope --->
{
  // This is inside a block
  {
     // This is inside a nested block
  }
}

// Scope refers to where a variable is visible within code.
// When code is outside of any blocks, it has global scope.
// Anything in global scope is accessible to any and all scopes below it.
let g = 10; // This is in the global scope.

// Each block creates a new scope, and nested blocks create nested scopes.
// Values in outer scopes are always available to inner scopes, 
// but values in inner scopes are only available to their own scope and any additional nested scopes they may have.
// Once an inner scope ends (once a '}' is reached), variables declared in that scope are no longer accessible.
{
  let b = 20; // Block scope, 'b' is only accessible within this pair of {} and will cease to be accessible once the closing brace } is reached.
  {
    let c = 30; // Declared in this nested block scope
    console.log(g); // 10
    console.log(b); // 20
    console.log(c); // 30
  } // 'c' is no longer accessible
  console.log(g); // 10
  console.log(b); // 20
  console.log(c); // ReferenceError: c is not defined
} // 'b' is no longer accessible
console.log(g); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined

// Besides reassignability, 'let', 'const', and 'var' determine a variable's scope.
// 'let' and 'const' always produce block scopes.
// There is another keyword we havent mentioned, 'var'. 
// It's is an older way to declare variables and has a global scope. It's ill-advised to use it.
// It's generally recommended to use 'let' and 'const' for better code clarity and scope management.