// $ go run go.go
package main
import "fmt"

// built-in types
// string
// bool
// int  int8  int16  int32  int64
// uint uint8 uint16 uint32 uint64 uintptr
// float32 float64
// complex64 complex128
// byte // alias for uint8
// rune // alias for int32 ~= a character (Unicode code point)

// types come after the identifier: https://go.dev/blog/declaration-syntax
var zipcode int // declaration, initialized to zero values (0, false, "", nil)
var areacode int = 42 // declaration and initialization
var foo, bar int = 42, 1234 // multiple declarations
var age = 42 // type inference

const male bool = true
const name string = "Peter" // strings are double quoted
const (
    StatusOk = 200
    StatusNotFound = 404
)

// Type conversion
float64(i)
uint(f)

func main() {
    // shorthand declaration only occur in function bodies, shadowing
    count := 42
    fmt.Println("Hello Go", count)
}