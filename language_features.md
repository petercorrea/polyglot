### Types

- Primitive Types (int, float, char, bool)
- Composite Types (arrays, structs, classes for Python, tuples)
- User-defined Types (enums, typedefs for C)
- Dynamic vs. Static typing (Python is dynamic, the others are static)
- Strong vs. Weak typing (Rust and Go are strongly typed)
- Immutable Built-in Types
- Value and reference types
- Type inference
- Integer Overflow
- Floating point precision
- Undefined behavior and Null
- Pointers
- Undefined/Zero/"" Initialized Values
- Padding and Alignment
- Array boundaries

### Variables, Scope, Lifetimes, Ownership, and Storage

- Local vs. Global Variables
- Stack vs. Heap storage
- Lexical vs. Dynamic Scoping (Python uses lexical)
- Shadowing
- Constant variables (const in Rust and Go, final in Python)
- Environment variables
- Automatic Garbage Collection vs. Manual Memory Management (Rust has ownership, C requires manual memory management)

### Control Flow

- Conditional Statements (if, switch)
- Exclusive upper bounds
- Loops (for, while, do-while for C)
- Jump Statements (break, continue, goto in C)
- Control Flow Graphs
- Pattern Matching (notable in Rust)
- Truthiness
- Fall through protection, off by one

### Functions

- Named vs. Anonymous Functions
- Higher-order Functions (not in C)
- Closures (not in C)
- Generics (available in Rust and Go, but differently implemented)
- Function Overloading (through methods in Python)
- Recursion, tail-call optimization (stack overflow)
- Callbacks
- Hoisting

### Objects and OOP (Object-Oriented Programming)

- Classes vs. Instances (Python has classes, Go uses struct for similar functionality)
- Inheritance (Python)
- Polymorphism (Python)
- Encapsulation
- Abstraction
- Composition (Go favors this over inheritance)
- Interfaces (Go has interfaces, Rust has Traits)
- Dynamic Classes Instances

### Concurrency, Threads, and Memory Models

- Processes vs. Threads
- Synchronization (mutex, semaphore)
- Deadlocks and Race Conditions
- Event Loops (Python's asyncio)
- Asynchronous Programming (Go's Goroutines, Rust's async/await)
- Memory Barriers (relevant for C)

### I/O (Input/Output)

- File Handling (read, write, append)
- Standard I/O Streams (stdin, stdout, stderr)
- Network Communication (sockets, HTTP)
- Inter-process Communication (IPC)
  
### Error Handling

- Exceptions vs. Error Codes (C uses error codes, Python uses exceptions)
- Try-Catch Blocks (Python and Rust)
- Finally and Cleanup Blocks (Python)
- Error Propagation (Rust uses `Result`, Go uses multiple return values)
- Assertions

### Unique or Language-Specific Features

- Syntactic Sugar (Python's comprehensions, Rust's match)
- Language Idioms (Pythonic code, idiomatic Go)
- Meta-programming (macros in Rust)
- Language-specific Data Structures (Go's slices and maps, Rust's vectors and hashmaps)
