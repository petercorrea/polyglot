// Top-level declarations are order-independent
const std = @import("std");

pub fn main() void {

    // FORMAT SPECIFIERS
    // {}: automatically determine the type
    // {d}: signed integer (i8, i16, i32, i64, isize)
    // {u}: unsigned integer (u8, u16, u32, u64, usize)
    // {x}: hexadecimal
    // {X}: like {x}, but uses uppercase letters for the alphabetic characters.
    // {b}: binary
    // {o}: unsigned integer in octal format.
    // {e}: floating-point number in scientific notation.
    // {f}: floating-point number in fixed-point notation.
    // {c}: character
    // {s}: null-terminated string or array of u8
    // {p}: pointer address
    // {*}: pointer to null-terminated string

    // PRIMITIVE TYPES: the usual
    // PRIMITIVE VALUES: true, false, null, undefined
    // OPTIONALS: ?T, can expect null, or a value of type T, '.?' is a shorthand for 'orelse unreachable'.
    // LITERALS: the usual
    
    // CONST AND VAR: everthing must have a value, undefined must be typed, unused values are not allowed
    // undefined can be coerced to any type. Once this happens, it is no longer possible to detect that the value is undefined
    // Container level variables have static lifetime and are order-independent and lazily analyzed.
    const age: u32 = 33; 
    var nickname = "Peter"; 
    var something: u32 = undefined; 
    something = 42;

    std.debug.print("{d}\n", .{age});
    std.debug.print("{s}\n", .{nickname});

    // NO OPERATOR OVERLOAD
    // PRECENDECE 
    // x() x[] x.y x.* x.?
    // a!b
    // x{}
    // !x -x -%x ~x &x ?x
    // * / % ** *% *| ||
    // + - ++ +% -% +| -|
    // << >> <<|
    // & ^ | orelse catch
    // == != < > <= >=
    // and
    // or
    // = *= *%= *|= /= %= += +%= +|= -= -%= -|= <<= <<|= >>= &= ^= |=

    // BLOCKS: are expressions, identifier shadowing is not allowed

    // ARRAYS: denoted by [N]T{}, where N is the number of elements (_ to infer size) in the array and T is the type 
    // There is no concept of truthy or falsy values...just true or false

    // CONTROL FLOW: if, else, switch..uses 'else' as the default case

    // ITERATIONS: while, for, continue, break
    // while loop has three parts - a condition, a block and a continue expression.
    // loops are expressions
    while (i <= 10) : (i += 1) {
        sum += i;
    }

    // FUNCTIONS: arguments are immutable, copies are done explicitly 

    // ERROR HANDELING: errors are not thrown and catched but returned
    // no exceptions exist, use enums, E!T means it returns an error
    // try
    
    // ENUMS: may have methods and declarations
    // STUCTS: 
        // T{}, 
        // may have methods and declarations,
        // no guarantees about the in-memory order of fields in a struct or its size, 
        // all fields must be given a value and may have defaults
    // UNIONS: 
    // TAGGED UNIONS: 

    //PAYLOAD CAPTURING: |value|
}

