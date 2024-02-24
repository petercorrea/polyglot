// A goroutine is a lightweight thread managed by the Go runtime.
// They have smaller overhead than OS threads.
// smaller amount of stack space that grows and shrinks dynamically, unlike OS threads which typically have a fixed size allocated for their stack.
// Goroutines are multiplexed onto multiple OS threads M>>N where M is goroutines and N is OS threads
// Go uses netpoller, an internal feature of the Go runtime that uses the underlying operating system's polling mechanism (such as epoll on Linux, kqueue on BSD, and IOCP on Windows) to monitor multiple network I/O operations on multiple sockets. When a goroutine performs a network I/O operation (e.g., reading from or writing to a network connection), instead of blocking the OS thread, the operation is registered with the netpoller. The netpoller will then notify the Go runtime when the I/O operation is ready to proceed, ensuring that the OS thread can be used to execute other goroutines in the meantime.
go func(msg string) {
    fmt.Println(msg)
}("going")

go myFunc(param1) // Start a goroutine for a function call


// Channels are typed conduits through which goroutines communicate and synchronize execution.
// Channels can be buffered or unbuffered:
// 		Unbuffered channels have no capacity to hold data in transit. A send operation on an unbuffered channel blocks the sending goroutine until another goroutine receives from the channel.
// 		Buffered channels have a capacity to store data. A send operation only blocks when the buffer is full, and a receive operation blocks when the buffer is empty.


ch := make(chan int)

go func() { ch <- 123 }() // Send value into channel


v := <-ch
fmt.Println("Received:", v) // Receive value from channel

// The select statement allows a goroutine to wait on multiple communication operations. 
// A select blocks until one of its cases can run, then it executes that case. It's similar to a switch statement but for channels.
select {
case ch1 <- v:
    fmt.Println("Sent v to ch1")
case v2 := <-ch2:
    fmt.Println("Received", v2, "from ch2")
default:
    fmt.Println("No activity")
}

// Use '-race' flag to detect concurrency issues during development