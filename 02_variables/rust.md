### Rust Variables and Scope

Rust is a statically typed language that emphasizes safety and concurrency. Its system for handling variables and scope is designed to prevent common bugs like null pointer dereferences and data races. Rust introduces several key concepts around variable mutability, ownership, borrowing, and lifetimes, which are central to its approach to memory safety without a garbage collector.

#### Variable Declaration and Mutability

- **Immutable by Default**: Variables in Rust are immutable by default. This means that once a variable is assigned a value, it cannot be changed unless explicitly declared mutable with the `mut` keyword.
- **Shadowing**: Rust allows variable shadowing. This means you can declare a new variable with the same name as a previous variable, and the new variable shadows the previous variable.

#### Scope and Shadowing

- **Block Scoped**: Variables in Rust are block-scoped, similar to many other programming languages, meaning they are only accessible within the block they are defined in.

#### The `const` Keyword

- **Constants**: Unlike variables, constants are always immutable and must be annotated with a type. Constants in Rust can be set only to a constant expression, not the result of a function call or any other value that could only be computed at runtime.

#### Ownership, Borrowing, and Lifetimes

- **Ownership**: A key feature of Rust. Each value in Rust has a single owner, and the scope of the value is tied to the scope of the owner. When the owner goes out of scope, the value is dropped.
- **Borrowing**: Rust allows references to a value without taking ownership of it. This is done through borrowing. There are two types of borrowing: immutable and mutable.
- **Lifetimes**: Lifetimes are Rust's way of ensuring that references do not outlive the data they point to. They are part of the type system but are usually inferred.

### Code Examples

#### Immutable and Mutable Variables

```rust
fn main() {
    let x = 5; // immutable variable
    // x = 6; // this line would cause a compile-time error

    let mut y = 5; // mutable variable
    y = 6; // allowed because y is mutable

    println!("x = {}, y = {}", x, y);
}
```

#### Scope and Shadowing

```rust
fn main() {
    let x = 5;

    {
        let x = x + 1; // shadows the outer x
        println!("The value of x in the inner scope is: {}", x);
    }

    println!("The value of x is: {}", x);
}
```

#### Constants

```rust
const MAX_POINTS: u32 = 100_000;

fn main() {
    println!("The maximum points you can get is: {}", MAX_POINTS);
}
```

#### Ownership and Borrowing

```rust
fn main() {
    let s = String::from("hello"); // s comes into scope

    takes_ownership(s); // s's value moves into the function...
                        // ... and so is no longer valid here

    let x = 5; // x comes into scope

    makes_copy(x); // x would move into the function,
                   // but i32 is Copy, so it's okay to still
                   // use x afterward

    println!("x is still accessible: {}", x);
    // println!("{}", s); // This would cause an error because s was moved
}

fn takes_ownership(some_string: String) { // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
  // memory is freed.

fn makes_copy(some_integer: i32) { // some_integer comes into scope
    println!("{}", some_integer);
} // Here, some_integer goes out of scope. No special action is needed.
```
