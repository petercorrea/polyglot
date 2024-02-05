// An Overview of Variables, Constants, and Built-in Types in Go

package main

import "fmt"

// Go provides a comprehensive set of built-in types, classified into several categories:
// - Boolean type: bool
// - Numeric types: int, int8, int16, int32, int64, uint, uint8, uint16, uint32, uint64, uintptr (for pointer arithmetic)
// - Floating-point types: float32, float64
// - Complex types: complex64, complex128
// - Other basic types: byte (alias for uint8, represents a byte of data), rune (alias for int32, represents a Unicode code point)

// Variable Declaration and Initialization:
// In Go, variables can be declared in multiple ways, demonstrating flexibility in the language's syntax.
var explicitType int // Declares a variable with an explicit type, initialized to the zero value of that type.
var initializedVar int = 10 // Declares and initializes a variable, specifying its type.
var inferredType = 10 // Type inference: Go compiler automatically infers the type of the variable based on the initial value.

// Multiple variable declarations can be grouped for readability and convenience.
var (
    name   string = "John Doe"
    age    int    = 30
    height float64 = 5.9
)

// Short variable declaration syntax, available within function bodies, offers a concise way to declare and initialize variables.
func main() {
    message := "Hello, Go!" // The type of 'message' is inferred to be string.
    fmt.Println(message)
}

// Constants:
// Constants in Go are declared with the 'const' keyword and can be of any of the built-in types.
const Pi float64 = 3.14159
const (
    StatusOK      = 200
    StatusCreated = 201
    StatusBadRequest = 400
)

// Constants cannot be declared using the := syntax.
// Once declared, the value of a constant cannot be changed.

// Type Conversion:
// Go requires explicit type conversions to convert a value from one type to another.
var integerVar int = 42
var floatVar float64 = float64(integerVar) // Converts 'integerVar' from int to float64.