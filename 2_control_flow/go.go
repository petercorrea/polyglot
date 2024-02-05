package main

import (
    "fmt"
    "math"
    "time"
)

func main() {
    // Deferred Function Call
    defer fmt.Println("Deferred call: Executed at the end of the main function.")

    // Conditional Branching with if-else
    x := 1 // Example value for demonstration
    if x > 0 {
        fmt.Println("x is positive")
    } else if x < 0 {
        fmt.Println("x is negative")
    } else {
        fmt.Println("x is zero")
    }

    // if Statement with a Preceding Statement
    n, lim := 2.0, 10.0 // Example values for demonstration
    if v := math.Pow(x, n); v < lim {
        fmt.Println("Result:", v)
    }

    // For Loop with continue and break
    for i := 0; i < 10; i++ {
        if i == 5 {
            continue // Skip the rest of the loop for i == 5
        }
        if i == 8 {
            fmt.Println("Loop breaks at i =", i)
            break // Exit the loop when i == 8
        }
        fmt.Println("Loop i =", i)
    }

    // Goto Statement - Using Labels for Jumping to a Specific Part of the Code
    i := 0
    goto Label // Jump to Label
Label:
    for ; i < 2; i++ {
        fmt.Println("Goto Loop i =", i)
    }

    // Infinite Loop terminated by a break statement
    i = 0
    for {
        if i == 3 {
            fmt.Println("Infinite loop breaks at i =", i)
            break // Exit the infinite loop
        }
        fmt.Println("Infinite loop i =", i)
        i++
    }

    // Concurrent Select Statement Example
    // Setup two channels
    c1 := make(chan string)
    c2 := make(chan string)

    // Simulate asynchronous operations using goroutines
    go func() {
        time.Sleep(1 * time.Second)
        c1 <- "one"
    }()
    go func() {
        time.Sleep(2 * time.Second)
        c2 <- "two"
    }()

    // Use select to wait on multiple channel operations
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-c1:
            fmt.Println("Received", msg1)
        case msg2 := <-c2:
            fmt.Println("Received", msg2)
        }
    }
}
