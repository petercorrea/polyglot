package main

import "fmt"

// Function Declaration and Return Values in Go

// Basic Function Declaration
// Demonstrates a simple function that takes two int parameters and returns their sum.
func add(x int, y int) int {
    return x + y
}

// Parameter Type Simplification
// When consecutive parameters share the same type, you can omit the type from all but the last parameter.
func addSimplified(x, y int) int {
    return x + y
}

// Multiple Return Values
// This function demonstrates returning multiple values from a single function. It swaps the values of its two string parameters.
func swap(x, y string) (string, string) {
    return y, x
}

// Named Return Values and Naked Return
// Shows the use of named return values, which can improve readability. The function returns two int values, calculated from the input.
// A naked return is used here, which means the return statement does not explicitly list return values.
func split(sum int) (x, y int) {
    x = sum * 4 / 9 // Calculate part of the sum
    y = sum - x     // Calculate the remainder
    return          // Naked return statement
}

func main() {
    // Defer Statement
    // Demonstrates the use of 'defer' to postpone the execution of a function call until the surrounding function returns.
    // 'defer' statements stack, so they execute in last-in-first-out order.
    defer fmt.Println("world") // This call is deferred until the end of the main function.
    fmt.Println("hello")       // This call is executed immediately.

    // Function Usage Examples
    fmt.Println("add(1, 2) =", add(1, 2))
    fmt.Println("addSimplified(1, 2) =", addSimplified(1, 2))
    a, b := swap("hello", "world")
    fmt.Println("swap('hello', 'world') =", a, b)
    x, y := split(17)
    fmt.Println("split(17) =", x, y)
}
