func add(x int, y int) int {
    return x + y
}

// Shortened when parameters share a type
func add(x, y int) int {
    return x + y
}

// Multiple return values
func swap(x, y string) (string, string) {
    return y, x
}

// Named return values
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return // Naked return
}

// A defer statement, arguments are evaluated immediately
// but the execution of a function until the surrounding function returns.
// deferred calls are executed in last-in-first-out order.
func main() {
	defer fmt.Println("world")
	fmt.Println("hello")
}
