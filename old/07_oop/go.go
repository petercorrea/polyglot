package main

import "fmt"

// Structs in Go
// Go uses structs to encapsulate data, creating complex types that group related fields together.

type Person struct {
    Name string
    Age  int
}

// Methods on Structs
// Methods are functions that execute in the context of a type. This allows us to define behavior for the structs.

func (p Person) Greet() string {
    return "Hello, my name is " + p.Name
}

// Interfaces in Go
// Interfaces define a contract by specifying a set of method signatures. A type implements an interface by implementing its methods.

type Greeter interface {
    Greet() string
}

// Automatic Interface Implementation
// A type automatically satisfies an interface if it implements all the interface's methods, as seen with the Person struct and Greeter interface.

func SayHello(g Greeter) {
    fmt.Println(g.Greet())
}

// Type Embedding for Composition
// Go supports composition by allowing structs to embed other structs, enabling a form of inheritance.

type Employee struct {
    Person   // Embedding Person struct allows Employee to inherit Person's methods and fields.
    Position string
}

// Generics in Go
// Go supports generic programming, enabling functions and types to operate on data of any type with constraints.

// Generic Function Example
// This function accepts a slice of any type (denoted by [T any]) and returns its first element.

func First[T any](s []T) T {
    return s[0]
}

func main() {
    // Using Structs and Methods
    bob := Person{Name: "Bob", Age: 30}
    fmt.Println(bob.Greet()) // Outputs: Hello, my name is Bob

    // Using Interfaces
    SayHello(bob) // Outputs: Hello, my name is Bob due to bob implementing Greeter

    // Using Type Embedding
    alice := Employee{Person: Person{Name: "Alice", Age: 28}, Position: "Developer"}
    fmt.Println(alice.Greet()) // Outputs: Hello, my name is Alice, showing inheritance through embedding

    // Using Generics
    numbers := []int{1, 2, 3}
    fmt.Println(First(numbers)) // Outputs: 1, demonstrating generic function usage
}
