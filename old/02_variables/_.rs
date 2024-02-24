fn main() {
    println!("Hello, world!");

    // Variables
    let immut = 1; // Immutable Variable (Stack-allocated), block scope, immutable by default
    let mut mutable = 1; // Mutable Variable (Stack-allocated), block scope, explicitly mutable
    static always_around = 1; // Static Variable (Static storage duration), global scope, Data segment, 'static lifetime,
    let dynamic = Box::new(1); // Dynamic Variable (Heap-allocated), block scope, automatic storage duration
    const NUM: i32 = 1; // Constant, must be type annotated, can be declared in any scope, must be compile-time eval, no lifeime, inlined (so no storage is allocated)

    // Reference Types: Unlike raw pointers, references must always point to valid data and cannot be null. They are the primary way to pass data between functions without transferring ownership.
    let y: &i32 = &a; // immutable reference
    let z: &mut i32 = &mut a; // mutable reference

    // Number Literals
    let deci = 12_345;
    let hex = 0xff;
    let octal = 0o77;
    let binary = 0b1111_0000;
    let byte = b'A';

    // Integer Types
    let a: i8 = 0; // 8-bit signed integer
    let b: i16 = 0; // 16-bit signed integer
    let c: i32 = 0; // 32-bit signed integer (default for integers)
    let d: i64 = 0; // 64-bit signed integer
    let e: i128 = 0; // 128-bit signed integer
    let f: u8 = 0; // 8-bit unsigned integer
    let g: u16 = 0; // 16-bit unsigned integer
    let h: u32 = 0; // 32-bit unsigned integer
    let i: u64 = 0; // 64-bit unsigned integer
    let j: u128 = 0; // 128-bit unsigned integer
    let k: isize = 0; // Pointer-sized signed integer
    let l: usize = 0; // Pointer-sized unsigned integer

    // Floating-Point Types
    let m: f32 = 0.0; // 32-bit floating-point
    let n: f64 = 0.0; // 64-bit floating-point (default for floats)

    // Boolean Type
    let o: bool = true;

    // Character Type: single qoutes, four bytes in size and represents a Unicode Scalar Value, which means it can represent a lot more than just ASCII.
    // note: a “character” isn’t really a concept in Unicode, so your human intuition for what a “character” is may not match up with what a char is in Rust.
    let p: char = 'a';

    // -------------Advance Types-------------
    // Array Type: same types, fixed length (stack allocated)
    // note: A vector is a similar collection type provided by the standard library that is allowed to grow or shrink in size.
    let q: [i32; 5] = [0, 1, 2, 3, 4];

    // Tuple Type have fixed length, vary types
    let r: (i32, f64, bool) = (0, 0.0, true);

    // Slice Type: A slice is a view into a contiguous sequence of elements in an array or another slice. Slices are dynamically sized and cannot be stored directly but can be handled through a reference. They are useful for working with a portion of an array without copying data.
    let s: &[i32] = &[0, 1, 2];

    // String Types
    let t: &str = "hello"; // string slice
    let u: String = String::from("hello"); // heap-allocated string

    // Function Type
    fn my_function(x: i32) -> i32 {
        x
    }
    let v: fn(i32) -> i32 = my_function;

    // Pointer Types:  Raw pointers can point to any memory location and do not enforce safety checks. They are rarely used in idiomatic Rust code and are generally reserved for FFI (Foreign Function Interface) and unsafe code blocks.
    let w: *const i32 = &a as *const i32; // const pointer to i32
    let x: *mut i32 = &mut a as *mut i32; // mutable pointer to i32
}

// The key differences are:
// static variables have a fixed memory location, and their lifetime is the entire duration of the program. They do have a 'static lifetime.
// const values are essentially copy-pasted into the locations where they are used, and they don't have a memory location or lifetime.

// Most of the time, a lifetime ends at the end of a scope, but here are the cases when it doesnt:
// - 1. 'static Lifetime: Variables with a 'static lifetime live for the entire duration of the program.
// - 2. Return Value Lifetimes: In some cases, the lifetime of a returned reference is tied to an input reference, effectively extending its lifetime.
// - 3. Thread Spawning: When you spawn a thread and move a variable into the thread's closure, the variable's lifetime is extended to match the lifetime of the thread.
// - 4. Rc and Arc: Using reference-counted types like Rc (single-threaded) or Arc (multi-threaded) can effectively extend the lifetime of a variable by keeping it alive as long as there are references to it.
// - 5. Closures: Closures can capture variables from their environment, extending those variables' lifetimes to match the lifetime of the closure itself.
// - 6. Interior Mutability: Using interior mutability patterns like RefCell or Mutex can allow you to mutate data even when you have a shared reference, effectively extending its "logical" lifetime.
