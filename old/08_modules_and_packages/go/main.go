package main

import (
	"fmt"
	"my-app/greetings"
)

func main () {
	message := greetings.Hello("Gopher")
	fmt.Println(message)
}