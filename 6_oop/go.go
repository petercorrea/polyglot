// Go has structs
type Person struct {
    Name string
    Age  int
}

// Method on structs
func (p Person) Greet() string {
    return "Hello, my name is " + p.Name
}

// Interfaces
type Greeter interface {
    Greet() string
}

// Person automatically implements Greeter because it has a Greet method.
func SayHello(g Greeter) {
    fmt.Println(g.Greet())
}

// Type embedding
type Employee struct {
    Person // Embedding Person struct
    Position string
}

// Generics
// A generic function that takes a slice of any type and returns the first element.
func First[T any](s []T) T {
    return s[0]
}