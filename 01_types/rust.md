### Rust Types Overview

Rust is a statically typed language, designed for safety and performance. It enforces strict type checking at compile time, preventing many types of errors and ensuring memory safety without a garbage collector. Rust’s type system supports both primitive and complex data types, along with powerful features like ownership and lifetimes for managing memory.

#### Basic Types

- **integers**: `i32`, `u32`, `i64`, `u64`, etc., where `i` stands for signed integers and `u` for unsigned.
- **floating-point numbers**: `f32`, `f64`.
- **boolean**: `bool`, which can be either `true` or `false`.
- **character**: `char`, representing a single Unicode scalar value.
- **tuples**: Fixed-size collections of values, possibly of different types.
- **arrays**: Fixed-size collections of values of the same type.

#### Complex Types

- **structs**: Define custom data types by grouping related values.
- **enums**: Define a type by enumerating its possible variants.
- **Option<T>**: A type that can either be `Some(T)` representing some value of type `T`, or `None`, representing the absence of value.
- **Result<T, E>**: A type used for returning and propagating errors. It can be `Ok(T)` for success and contains a value of type `T`, or `Err(E)` for error and contains an error of type `E`.

#### Ownership, Borrowing, and Lifetimes

- These features are part of Rust's memory management system. Ownership rules help manage heap data, borrowing enforces references, and lifetimes ensure references are valid as long as they are used.

#### Type Conversion

- Rust requires explicit conversion for most types to prevent unexpected behavior or loss of precision. This is typically done through the `as` keyword or by implementing traits like `From` and `Into`.

### Code Examples

#### Basic Types and Structs

```rust
fn main() {
    let integer: i32 = 10;
    let float: f64 = 3.14;
    let boolean: bool = true;
    let character: char = 'R';
    let tuple: (i32, f64) = (500, 6.4);
    let array: [i32; 3] = [1, 2, 3];

    struct Person {
        name: String,
        age: u8,
    }

    let person = Person {
        name: String::from("Alice"),
        age: 30,
    };

    println!("Integer: {}, Float: {}, Boolean: {}, Character: {}", integer, float, boolean, character);
    println!("Tuple: ({}, {}), Array: {:?}", tuple.0, tuple.1, array);
    println!("Person: {}, {}", person.name, person.age);
}
```

#### Enums and Match Control Flow

```rust
enum WebEvent {
    PageLoad,
    PageUnload,
    KeyPress(char),
    Paste(String),
    Click { x: i64, y: i64 },
}

fn inspect(event: WebEvent) {
    use WebEvent::*;
    match event {
        PageLoad => println!("page loaded"),
        PageUnload => println!("page unloaded"),
        KeyPress(c) => println!("pressed '{}'.", c),
        Paste(s) => println!("pasted \"{}\".", s),
        Click { x, y } => {
            println!("clicked at x={}, y={}.", x, y);
        },
    }
}

fn main() {
    let pressed = WebEvent::KeyPress('x');
    let pasted = WebEvent::Paste(String::from("my text"));
    let click = WebEvent::Click { x: 20, y: 80 };
    let load = WebEvent::PageLoad;

    inspect(pressed);
    inspect(pasted);
    inspect(click);
    inspect(load);
}
```

#### Option and Result

```rust
fn divide(numerator: f64, denominator: f64) -> Option<f64> {
    if denominator == 0.0 {
        None
    } else {
        Some(numerator / denominator)
    }
}

fn main() {
    let result = divide(2.0, 3.0);
    match result {
        Some(x) => println!("Result: {}", x),
        None => println!("Cannot divide by 0"),
    }

    let err: Result<i32, String> = Err(String::from("An error occurred"));
    match err {
        Ok(code) => println!("Success with code: {}", code),
        Err(e) => println!("Error: {}", e),
    }
}
```
