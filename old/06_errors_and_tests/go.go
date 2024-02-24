package main

import (
    "errors"
    "fmt"
    "log"
    "os"
)

func main() {
    // Error Handling in Go
    // Go's approach to error handling is explicit, using the error type as part of a function's return value.

    // Example of a function that returns an error
    result, err := divide(10, 0)
    if err != nil {
        log.Printf("Error occurred: %v\n", err)
        // Handle the error, e.g., by returning it to the caller or logging it
        return // Optionally return or exit, depending on the application's needs
    }
    fmt.Println("Result:", result)

    // Creating Custom Errors
    // You can create a custom error using the errors.New function or by implementing the error interface.
    customErr := errors.New("custom error")
    fmt.Println("Custom Error:", customErr)

    // Debugging in Go
    // Debugging can be performed using a debugger like Delve, log statements, or by leveraging the testing package for unit tests.

    // Logging
    // Logging is a simple yet effective way to debug applications. The log package allows you to log messages with different severity levels.
    log.Println("This is a log message.")

    // Using Delve for Debugging
    // Delve is a debugger for the Go programming language, offering a full debugging experience. It allows setting breakpoints, inspecting variables, and controlling the execution flow.

    // Note: Delve usage and other debugging techniques would typically be performed outside the code, in the development environment.
}

// divide is a function that demonstrates error handling by returning an error when division by zero is attempted.
func divide(x, y float64) (float64, error) {
    if y == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return x / y, nil // If no error, return the result and nil for the error.
}
