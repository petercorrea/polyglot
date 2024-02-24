### Zig Types Overview

Zig is a statically typed, general-purpose programming language designed for maintainability, performance, and robustness. It aims to improve upon C by offering a comprehensive type system that includes compile-time execution and type checking, without hidden control flow or implicit allocations. Zig's type system is explicit and straightforward, encouraging clear and efficient code.

#### Basic Types

- **Integers**: `i32`, `u32`, `i64`, `u64`, etc., where `i` denotes signed integers and `u` for unsigned. The number indicates the bit size.
- **Floating Point**: `f32`, `f64` for single and double precision.
- **Boolean**: `bool`, representing `true` or `false`.
- **Void**: Indicates no value or type.
- **Pointers**: Including single pointers, optional pointers, and slice pointers.
- **Arrays**: Fixed-size lists of elements of a single type.
- **Slices**: A view into an array, similar to pointers but with length information.

#### Advanced Types

- **Structs**: Custom data types that group together other data types.
- **Enums**: A type consisting of a set of named values.
- **Unions**: A type that can contain any one of its declared member types at a time.
- **Optional Types**: Represent values that may or may not exist, akin to nullable types in other languages.
- **Error Union Types**: Combine an error set with a value, used for error handling.

#### Type Features

- **Comptime**: Zig allows for computation at compile-time, making it possible to use types in powerful ways, such as generating code based on conditions during compilation.
- **Safety**: Zig provides several safety features, like bounds checking for arrays, making it safer out of the box compared to languages like C.

### Code Examples

#### Basic and Composite Types

```zig
const std = @import("std");

pub fn main() void {
    var a: i32 = 10;
    var b: f64 = 3.14;
    var c: bool = true;
    var d: void = {};
    var arr: [4]i32 = [1, 2, 3, 4]; // Array
    var slice: []const i32 = arr[0..2]; // Slice

    // Struct
    const Person = struct {
        name: []const u8,
        age: u32,
    };

    var person: Person = .{
        .name = "Alice",
        .age = 30,
    };

    std.debug.print("Person: {}, {}\n", .{ person.name, person.age });
}
```

#### Enums, Unions, and Optional Types

```zig
const std = @import("std");

pub fn main() void {
    // Enum
    const Color = enum { red, green, blue };
    var col: Color = Color.green;

    // Union
    const Token = union(enum) {
        int: i32,
        float: f64,
        str: []const u8,
    };

    var token: Token = .{ .int = 10 };

    // Optional Type
    var maybeNumber: ?i32 = null;
    maybeNumber = 10;

    std.debug.print("Color: {}, Token: {}, MaybeNumber: {}\n", .{ col, token.int, maybeNumber });
}
```

#### Error Handling with Error Union Types

```zig
const std = @import("std");

fn divide(a: i32, b: i32) !i32 {
    if (b == 0) return error.DivisionByZero;
    return a / b;
}

pub fn main() void {
    var result = divide(10, 0) catch |err| {
        std.debug.print("Error: {}\n", .{err});
        return;
    };

    std.debug.print("Result: {}\n", .{result});
}
```
