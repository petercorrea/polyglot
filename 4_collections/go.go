package main

import "fmt"

func main() {
    // Arrays in Go
    // Declaring an array to hold 5 integers. By default, an array is zero-valued, which for ints means all elements are 0.
    var a [5]int
    a[4] = 100 // Setting the value of the fifth element (index 4) to 100.
    fmt.Println("Get element:", a[4]) // Accessing an element of the array.

    // Array Initialization
    // Declare and initialize an array in a single line.
    b := [5]int{1, 2, 3, 4, 5} // An array of five integers, initialized with values.

    // Slices in Go
    // Unlike arrays, slices are dynamically-sized. Here's how to declare and initialize a slice.
    s := []int{1, 2, 3} // A slice, initialized with three integers.
    s = append(s, 4)    // Appending an element to the slice. Slices grow dynamically.

    // Slicing
    // You can obtain a slice of a slice, specifying start and end positions.
    fmt.Println("Slice [1:3]:", s[1:3]) // Gets a slice from index 1 to 2 (inclusive start, exclusive end).

    // Maps in Go
    // Maps are key-value stores. Here's how to declare, populate, and manipulate a map.
    m := make(map[string]int) // Declaring a map with string keys and int values.
    m["key"] = 42             // Setting the value of "key" to 42.
    fmt.Println("Map value:", m["key"]) // Accessing the value stored with key "key".

    // Deleting a Key-Value Pair
    delete(m, "key") // Removes the entry for "key" from the map.

    // Testing for Presence
    // The "ok" variable indicates whether the key was found in the map.
    v, ok := m["key"] // Attempts to retrieve the value for "key". If "key" is present, ok is true; otherwise, false.
    if ok {
        fmt.Println("Value:", v)
    } else {
        fmt.Println("Key not found")
    }
}
