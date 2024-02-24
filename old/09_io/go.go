package main

import (
    "bufio"
    "fmt"
    "io"
    "io/ioutil"
    "os"
)

func main() {
    // Reading and Writing with the io and ioutil Packages

    // Reading from a File
    // ioutil.ReadFile reads the entire file into memory.
    data, err := ioutil.ReadFile("filename.txt")
    if err != nil {
        panic(err)
    }
    fmt.Print(string(data))

    // Writing to a File
    // ioutil.WriteFile writes data to a file, replacing the file if it already exists.
    err = ioutil.WriteFile("filename.txt", []byte("Hello, Go!\n"), 0644)
    if err != nil {
        panic(err)
    }

    // Using the os Package for File Operations
    // The os package provides a platform-independent interface to operating system functionality.
    file, err := os.Open("filename.txt") // For read access.
    if err != nil {
        panic(err)
    }
    defer file.Close() // It's important to close the file when done.

    // Reading a file with bufio for Efficient I/O
    // bufio.NewReader improves reading efficiency by buffering the reads from the underlying io.Reader.
    reader := bufio.NewReader(file)
    for {
        line, err := reader.ReadString('\n')
        if err == io.EOF {
            break // End of file reached
        }
        if err != nil {
            panic(err) // Handle other potential errors
        }
        fmt.Print(line)
    }

    // Writing to a File with bufio
    outputFile, err := os.Create("output.txt") // For write access.
    if err != nil {
        panic(err)
    }
    defer outputFile.Close() // It's important to close the file when done.
    writer := bufio.NewWriter(outputFile)
    _, err = writer.WriteString("Writing to a file with bufio.\n")
    if err != nil {
        panic(err)
    }
    writer.Flush() // Ensure all buffered operations are applied to the underlying writer.

    // Working with io.Reader and io.Writer Interfaces
    // The io package defines io.Reader and io.Writer interfaces, which are implemented by many types in the standard library, providing a consistent way to handle I/O operations.

    // Copying Data
    // io.Copy copies data from a src io.Reader to a dst io.Writer.
    _, err = io.Copy(outputFile, file) // Example: copying the contents of one file to another.
    if err != nil {
        panic(err)
    }
}
