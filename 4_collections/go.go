// Arrays
var a [5]int // Array of 5 integers
a[4] = 100
fmt.Println("Get element:", a[4])

// Declare and initialize
b := [5]int{1, 2, 3, 4, 5}

// Slices
s := []int{1, 2, 3} // Slice
s = append(s, 4) // Append to slice

// Slice [start:end]
fmt.Println(s[1:3])

// Maps
m := make(map[string]int)
m["key"] = 42
fmt.Println("Map value:", m["key"])

// Delete a key
delete(m, "key")

// Test that a key is present with a two-value assignment
v, ok := m["key"]
