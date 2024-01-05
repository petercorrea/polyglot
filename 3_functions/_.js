// implicit return value of functions
// Var (Function Scope)
function oldFunc() {
  var a = 10; // Function scope, hoisted
}

// Hoisting
// Hoisting in JavaScript allows variable declarations to be moved to the top of their containing scope during compilation.
// This means that variables can be used before they are declared in the code.
// However, only declarations are hoisted, not initializations.
console.log(banana); // undefined (due to hoisting, but 'banana' is not yet initialized)
var banana = "bananas"; // Using 'var' for demonstration as 'let' and 'const' do not hoist in the same way.