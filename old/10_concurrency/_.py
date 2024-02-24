# Types of concurrency

# Concurrency Libraries
#   - threading (I/O bound computing)
#   - asyncio (I/O bound computing)
#   - multiprocessing (multiple processors)

# I/O bound means that the computer is limited by its memory reads and peripherals than it is by the CPU.
# Because of this the CPU can be running more instructions while it's waiting for reads and network requests.

# Multitasking
#   - No multitasking: one program at a time (DOS)
#   - Cooperative multitasking: the program yields to the OS (Windows 3.1)
#   - Pre-emptive multitasking: the CPU interrupts the program (Windows 95, UNIX)

# Concurrency Types
# Not all algorithms can take advantage of concurrency
#   - trivial concurrency: no shared data, independent computations
#   - shared data: requires coordination 

# Concurrency Patterns
#   - producer, worker, consumer
#   - N-workers: only sees a portion of the data
#   - Broadcast: sees all of the data but only works on a portion of it
#   - mix & match

# Concurrency Challenges
#   - coordination: sync up different processes
#   - memory allocation
#   - scheduling: which processes are active
#   - throughput: all the above combined 
#   - distribution: processes, threads, machines
#   - deadlocks: two or more components are waiting for each other 
#   - resources starvation: running out of memory, processes, disk space

# Concurrency in Python can occurs at these levels:
#   - OS
#   - multiprocessors
#   - threads
#   - co-routines 

# Global Interpreter Lock (GIL)
#   - Is a mutex (thread lock) 
#   - ensures only one thread at a time controls the interpreter
#   - limits multithread execution
#   - prevents race conditions with memory and reference allocations
#   - important because Python can have C-extensions 
#   - is an implementation CPython and PyPy have it; Jython and IronPython dont
#   - PEP 554 introduces multiple interpreters in the STDLIB that were CPython already had
#       - each interpreters is called a sub-interpreter and acts as an additional tool, doesn't remove the GIL

# Threads 
#   - best for I/O bound processes
#   - enable to slice up computation
#   - pre-emptive
#   - memory is shared across all threads within a process 
#   - the amount of threads can't just be some max amount because creating threads 
#       and switching between threads causes overhead and can make the computer waste
#       much resources simply by managing threads. The appropriate amount if based on
#       how I/O bound the application is
#   - Python Thread Primitives
#       - OS specific 
#       - Thread.start(), Thread.join(), Queue
#       - concurrency.futures library along along with Executors abstracts these primitives

# Race Conditions
#   - A race condition occurs when two or more threads can access shared data and they try to change it at the same time
#   - They are prevented by locking mechanisms

# asyncio
#   - best for I/O bound processes
#   - Is Python specific, not OS specific
#   - Uses an event loop and coroutines
#   - Libraries have to specifically support asyncio to be able to use asyncio
#   - tends to outperform threads
#   - Co-operative

# Multi-processing
#   - best for CPU bound processes
#   - Everything before this has been on a single CPU
#   - each CPU gets its own interpreter/GIL
#   - while this may increase performance there might be other bottlenecks, e.g. the network card
#   - creates more overhead as this works on the OS level, more memory, slower to  initialize
#   - communicating between processes tends to be more complex
#       Queue and Pipe
#       shared memory: Value and Array

# CPU Bound Workloads
#   - I/O bound: waiting on input and output, e.g. network requests
#   - CPU bound: waiting for computation

# Is it always better to opt in for concurrency?
#   - No, some programs will spend more time setting up and managing the concurrency than they gain in doing operations in parallel.
