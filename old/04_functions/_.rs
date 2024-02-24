// Functions in rust must/are
// - expression based (they return a value)
// - be typed
// - Does not support default arguments directly, but you can achieve similar functionality using Option<T> or function overloading via traits.
// - Does not directly support Variadic functions, but similar functionality can be achieved using slices or macros.
// - Uses the Result and Option types for error handling,
// - Does not support traditional function overloading but can achieve similar functionality through traits.
// - Function parameters are immutable by default and must be explicitly marked as mutable with the mut keyword.
// - Uses the async/await syntax along with Future types for asynchronous programming.
// - Supports higher-order functions but requires explicit lifetimes and type annotations.
// - functions are not hoisted in Rust. In Rust, the order in which functions are declared does not matter, so you can call a function before its
//       definition appears in the code. However, this is not the same as hoisting, which is a JavaScript-specific behavior where variable and function declarations
//       are moved to the top of their containing scope during the compilation phase.
//       In Rust, you can define a function anywhere in the module and call it from anywhere else in the same module, regardless of the order of declaration.
//       This is because Rust performs multiple passes over the code during compilation, resolving function names after parsing the entire module.

// statements: creating variables, assigning values, function definitions,
// expressions: calling fdunctions, macros, blocks

// note: Expressions do not include ending semicolons. If you add a semicolon to the end of an expression, you turn it into a statement, and it will then not return a value.
fn main() {
    let x = plus_one(5);

    println!("The value of x is: {x}");
}

fn plus_one(x: i32) -> i32 {
    x + 1
    // x + 1; // will err
}
