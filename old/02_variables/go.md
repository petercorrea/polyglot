# Types, Variables, & Constants

### Types

Go provides a comprehensive set of built-in types, classified into several categories:

- Boolean type: bool
- Numeric types: int, int8, int16, int32, int64, uint, uint8, uint16, uint32, uint64, uintptr (for pointer arithmetic)
- Floating-point types: float32, float64
- Complex types: complex64, complex128
- Others:
  - byte (alias for uint8, represents a byte of data),
  - rune (alias for int32, represents a Unicode code point)

### Variables

- Local Variables: Defined within functions or blocks and accessible only within those functions or blocks.
- Global Variables: Defined outside of functions, usually at the top level of a package, and accessible from any function within the package.
- Scope Shadowing: Go allows shadowing, where a local variable in a narrower scope can have the same name as a variable in a broader scope, effectively hiding the broader-scope variable.

In Go, variables can be declared in multiple ways, demonstrating flexibility in the language's syntax. Variables can be declared explicitly or inferred and initialized with an explicit value or default to a "zero-th value", `0` for ints, `""` for strings, and `false` for booleans.

Go also provides a short variable declaration syntax `:=` which offers a concise way to declare, initialize and infer variables. This is only available within function bodies.

### Constants

Constants in Go are declared with the `const` keyword and can be of any of the built-in types. They cannot by declared with `:=`. They are true constants.

### Type Conversion

Go requires explicit type conversions to convert a value from one type to another.

### Code Example

```go
package main

import "fmt"

var explicitType int // zero-th value is automatically provided
var initializedVar int = 10 
var inferredType = 10 

// Multiple variable declarations
var (
    name   string = "John Doe"
    age    int    = 30
    height float64 = 5.9
)


func main() {
    message := "Hello, Go!" // inferred
    fmt.Println(message)
}

const Pi float64 = 3.14159
const (
    StatusOK      = 200
    StatusCreated = 201
    StatusBadRequest = 400
)

var integerVar int = 42
var floatVar float64 = float64(integerVar) Converts 'integerVar' from int to float64.
```
