// conditional branching
if x > 0 {
    fmt.Println("x is positive")
} else if x < 0 {
    fmt.Println("x is negative")
} else {
    fmt.Println("x is zero")
}

// if statements can start with an expression before evaluating
if v := math.Pow(x, n); v < lim {
	return v
}

// For Loops
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// While Loop...still uses 'for' keyword
i := 0
for i < 10 {
    fmt.Println(i)
    i++
}

// Infinite loop
for {
    // Do something
}

// Switch Statement, supports 'fallthrough' and 'break' keywords
number := 3

switch number {
case 1, 3, 5, 7, 9:
    fmt.Println("Odd")
case 2, 4, 6, 8, 10:
    fmt.Println("Even")
default:
    fmt.Println("Unknown number")
}

