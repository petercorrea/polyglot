### Zig Variables and Scope

Zig is a statically typed, general-purpose programming language designed for maintainability and performance. It aims to provide robust compile-time features and fine-grained control over memory management without hidden control flow. Zig's approach to variables and scope includes several unique aspects that reflect its goals of simplicity and efficiency.

#### Variable Declaration and Initialization

- **`var` and `const`**: Zig uses `var` for declaring mutable variables and `const` for immutable variables. Unlike many languages, Zig requires explicit initialization of variables at the point of declaration.
- **Type Inference**: Zig allows type inference using the `:=` operator, enabling the compiler to infer the variable's type from its initial value.

#### Scope

- Variables in Zig are block-scoped, similar to languages like C and Rust. The visibility and lifetime of a variable are limited to the block in which it is defined.
- Zig does not have a traditional garbage collector or runtime; as such, understanding the scope and lifetime of variables is crucial for managing memory effectively.

#### Mutability

- Variables declared with `var` can be reassigned and mutated.
- Variables declared with `const` are immutable; their value cannot be changed after initialization. This immutability is shallow, similar to `const` in languages like C++ and Rust.

#### Pointers and Constness

- Zig has explicit pointer types, and the constness of pointers can be controlled. A `const` pointer (`*const`) points to a value that cannot be modified through that pointer, while a mutable pointer (`*`) can modify the value it points to.

### Code Examples

#### Variable Declarations and Scope

```zig
const std = @import("std");

pub fn main() void {
    const message: []const u8 = "Hello, Zig!"; // Immutable variable
    var counter: i32 = 0; // Mutable variable

    while (counter < 5) : (counter += 1) {
        std.debug.print("{s} {d}\n", .{message, counter});
    }

    // 'message' and 'counter' are scoped to 'main'
}
```

#### Mutability and Type Inference

```zig
pub fn main() void {
    var mutableValue: i32 = 10;
    mutableValue += 5; // Allowed because 'mutableValue' is mutable

    const immutableValue = 15; // Type inference with immutability
    // immutableValue += 5; // This line would cause a compile-time error
}
```

#### Pointers and Constness

```zig
pub fn main() void {
    var value: i32 = 42;
    const ptr: *const i32 = &value; // Pointer to const int
    var mptr: *i32 = &value; // Mutable pointer to int

    std.debug.print("ptr points to: {d}\n", .{*ptr});
    // *ptr = 24; // Error: cannot assign through pointer to const

    *mptr = 24; // Allowed
    std.debug.print("mptr now points to: {d}\n", .{*mptr});
}
```
