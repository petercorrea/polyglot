C was developed in 1972 by Dennis Ritchie at Bell Labs. It was created as a systems programming language to work on the Unix operating system. C became popular due to its efficiency and flexibility, which made it a popular choice for developing software across various platforms. C has influenced many other programming languages, such as Java and Python, and is still widely used today.

C is portable, general purpose, statically typed, compiled language

Systems langauges give you the freedom to manage memory, customize compilation, interface with the OS.

## Overall structure

```c
pre-processor directives
global declarations

main()
{
    local variable declaration
    statement sequences
    function invoking
}
```

## Reserved Keywords

```c
# dont use
auto 
 - used to declare automatic variables (obsolete)
goto 
 - jump execution to a label (obsolete)

# variables and functions                    
extern 
 - declare a variable or function that is defined in another source file or library
void 
 - indicate that a function does not return a value
static
 - Static Variable in Functions: a local variable in a function, it causes the variable to retain its value between function calls
 - Static Global Variable: used with a global variable, it limits the scope of that variable to the file in which it is declared
 - Static Function: a function that has a scope that is limited to its containing file

# data types
 typedef 
  - create new data type synonyms
 union 
  - data type that allows you to store different types of data in the same memory location, You can define a union with many members, but only one member can contain a value at any given time.
 const int double char float signed unsigned short long
 struct 
  - combine data items of different kinds
 enum 
  - assign names to integral constants
 
# control flow
 if else do continue for while case break switch default return

# memory
 register 
  - the declared variable will be heavily used in the program and therefore, should be stored in the CPU's register (if possible and allowed by the compiler) to allow faster access.
 volatile 
  - the compiler is prevented from optimizing the code in a way that 
  might cause the variable's value to be cached and reused. This ensures that 
  the program always uses the most up-to-date value of the variable that may 
  be modified unexpectedly by external sources, hardware devices or other 
  processes outside of the program's control.
 sizeof 
  - returns the size of its operand in bytes      
```

## Comments

## Variables

Variables in C are used to store values that can be accessed later in the program. They must be declared (but not necessarily initialized) before they can be used and must have a data type.

### Scope

- Global: can be accessed by any other source code, and a lifetime of the program
- File: `static` are accessible within the file where they are declared but not in other files, and a lifetime of the program
- Static: `static` retains its value between function calls
- Local: only be accessed within that function or block
- Block: within a specific block (like inside loops, conditional statements) are only accessible within that block
- Function: A label (used with `goto`) has function scope and can be used anywhere within the function where it is defined.

### Lifetime (storage duration)

- Static: exists for the duration of the program (e.g., global variables, static local variables).
- Automatic: exists only within the block where it's declared (e.g., local variables, function parameters).
- Dynamic: managed manually
- Thread Storage Duration (C11): lasts as long as the containing thread.

### Type Qualifiers

const, volatile, and restrict.

### Alignment

Alignment is the requirement that the memory addresses of certain types of variables be divisible by a particular value, known as the alignment requirement. This requirement varies by data type and hardware architecture. Modern processors access memory in chunks of a certain size, called words. If data is aligned with these word boundaries, it can be accessed more efficiently. Misaligned data may require multiple accesses, slowing down the program, or even causing hardware exceptions on some architectures. Different data types might have different alignment requirements.

- Manual:
- Dynamic:
- Structure:

## Types

- Basic
  - integer
    - short
    - int
    - long
  - float
    - float
    - double
  - character
    - char
- Derived
  - pointers
  - arrays
  - type definitions
  - structures
  - unions
- Enumeration
- Void

## Loops

## Functions

## Error Handling

## File Management

## Pointers

Pointers are just variables containing a memory address.

## Memory Management

**`malloc()`**, **`calloc()`**, **`free()`**, **`realloc()`**

1. **Static Memory Allocation**: This is done for static and global variables. Memory for these types of variables is allocated once when your program is run and is not freed until the program ends.
2. **Automatic Memory Allocation**: This is done for local variables. Memory for these variables is automatically allocated when the control flow enters the block in which they are defined and is freed automatically when it leaves that block.
3. **Dynamic Memory Allocation (Heap)**: This is done using the four memory management functions available in C: **`malloc()`**, **`calloc()`**, **`realloc()`**, and **`free()`**. These functions are part of the **`stdlib.h`** library.
    - **`malloc(size_t size)`**: Allocates a block of **`size`** bytes of memory and returns a pointer to the beginning of the block.
    - **`calloc(size_t n, size_t size)`**: Allocates a block of memory for an array of **`n`** elements, each of **`size`** bytes. The block is initialized to zero.
    - **`realloc(void* ptr, size_t size)`**: Changes the size of the memory block pointed to by **`ptr`** to **`size`** bytes. The block may be moved to a new location, in which case a new pointer is returned.
    - **`free(void* ptr)`**: Deallocates the block of memory that **`ptr`** points to. After **`free()`** is called, **`ptr`** should not be used.

### Common Memory Issues

1. **Buffer Overflows/Underflows**: A buffer overflow occurs when you write more data to a buffer than it can hold. Similarly, a buffer underflow occurs when you try to retrieve more data from a buffer than it currently holds. Both can lead to undefined behavior, including memory corruption and program crashes.
2. **Double Freeing**: This occurs when **`free()`** is called more than once with the same memory address as an argument. After memory has been freed once, subsequent calls to **`free()`** with the same address can lead to undefined behavior.
3. **Uninitialized Read**: This occurs when a program reads a value from memory before a value has been written to it. In C, local variables are not automatically initialized to a default value, so if you try to read a local variable before assigning a value to it, you'll get whatever data was already in that memory location, which is often meaningless and can lead to unpredictable behavior.
4. **Null Pointer Dereferencing**: This occurs when a program tries to access memory through a null pointer. This is a common cause of crashes, as accessing memory through a null pointer leads to undefined behavior.
5. **Memory Fragmentation**: This occurs when memory is allocated and deallocated in such a way that free memory is broken up into small blocks that are separated by allocated blocks. This can make it difficult or impossible to allocate large blocks of memory, even if enough total memory is free.
6. **Invalid Memory Access**: This happens when you try to access memory that your program doesn't own, like accessing past the end of an array or trying to access memory that's already been freed. This can lead to undefined behavior and often causes program crashes.
7. **Failure to Check Allocation Results**: When you use **`malloc()`** or **`calloc()`**, it's possible for the allocation to fail if there's not enough memory available. In this case, **`malloc()`** or **`calloc()`** will return a null pointer. If you don't check for this and try to use the memory anyway, you'll run into issues.
8. **Memory Leaks**: when memory is not freed
9. **Dangling Pointers**: when a pointer to freed memory are used

## Headers

Here are some common uses of header files:

1. **Function Declarations**: A header file can be used to store function declarations, which can then be **`#include`**d into any source file that needs to use these functions. This allows functions to be defined in one source file and used in another.
2. **Macro Definitions**: Header files are also commonly used to store definitions of macros using the **`#define`** preprocessor directive.
3. **Type Definitions**: Type definitions (like **`struct`**, **`enum`**, and **`typedef`**) can also be put in header files so they can be used in multiple source files.
4. **Global Variable Declarations**: While it's generally considered bad practice to use global variables in large programs, if you do need to use them, their declarations can be put in a header file.
5. **Constant Definitions**: If your program uses any constants, you can **`#define`** them in a header file.

To include a header file in a C source file, you use the **`#include`** preprocessor directive. There are two ways to use **`#include`**:

1. **`#include <file>`**: This form is used for system header files. The compiler looks for the file in the standard system directories.
2. **`#include "file"`**: This form is used for header files of your own program. The compiler looks for the file in the same directory as the file containing the **`#include`** statement, or in one of the directories specified to it as a command line option.

## **Preprocessor Directives**

modifies the code before it's actually compiled. preprocessor directives are lines included in the code of programs that are not program statements but directives for the preprocessor. The preprocessor processes these directives before the actual compilation of code begins.

**`#include`**: This directive is used to include another file in your source file. This is commonly used to include standard library header files or other header files you've created for your program.

**`#define`**: This directive is used to define a constant or a macro.

**`#undef`**: This directive is used to undefine a constant or a macro.

**`#if`, `#else`, `#elif`, `#endif`**: These directives are used for conditional compilation.

**`#pragma`**: This directive is used to specify diverse compiler instructions. The behavior depends on the specific compiler you're using.

**`#error` and `#warning`**: These directives are used to output error or warning messages to the user. **`#error`** will stop the compilation process, whereas **`#warning`** will just show the message and let the compilation continue.

## Multithreading

Here's a brief overview of multithreading in C:

1. **Threads**: A thread is the smallest executable unit in a process. Multiple threads within a process share the same data space with the main thread and can therefore share information or communicate with each other more easily than if they were separate processes.
2. **Creating Threads**: In the C11 standard, a new thread can be created using the **`thrd_create`** function, which is part of the **`threads.h`** header. The **`thrd_create`** function takes a function pointer that represents the code the thread will execute.
3. **Ending Threads**: A thread can be terminated using the **`thrd_exit`** function, which also takes an integer parameter to act as a return value.
4. **Waiting for Threads**: The **`thrd_join`** function can be used to block the calling thread until another, specified thread has finished executing. This is often used to ensure that a program does not exit before its threads have finished execution.
5. **Thread Safety and Synchronization**: When multiple threads access shared data, they can interfere with each other in a way that causes incorrect results. This is called a race condition. To avoid race conditions, you can use mutexes (locks that ensure that only one thread can access a piece of data at a time) and condition variables (which allow threads to wait for certain conditions to be true). The C11 standard provides the **`mtx_t`** type for mutexes and the **`cnd_t`** type for condition variables.
6. **Thread-Specific Data**: The **`tss_t`** type in C11 allows for thread-specific data, which is data that each thread has its own unique copy of. This is useful when you want to avoid sharing data between threads.

## Dynamic Libraries

Here are the key points you need to understand about dynamic libraries:

1. **Code Reuse and Modularity**: Shared libraries allow code to be reused across multiple applications. For example, many applications use the C standard library, so it's more efficient to have this code in a shared library rather than including a copy of it in every application.
2. **Memory Efficiency**: When multiple running programs use the same library, the operating system can share the code between them, reducing memory usage.
3. **Separate Compilation and Linking**: With dynamic libraries, you can compile your code separately from the libraries it uses. When you compile your program, you only need to tell the linker about the symbols (functions, variables, etc.) that your program uses from the library; you don't need to include the library's code in your executable. The library's code is loaded at runtime when it's needed.
4. **Versioning and Updating**: When a shared library is updated, all the applications that use it can benefit from the update, assuming the library maintains binary compatibility (meaning it doesn't change the signatures of its public functions or the definitions of public data types). This can be useful for security updates and bug fixes.
