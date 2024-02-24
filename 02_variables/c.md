### C Variables and Scope

In C programming, variables are placeholders for storing data values. C requires variables to be declared with an explicit type that determines the kind of data the variable can hold. Understanding the scope of variables, the `const` qualifier for immutability, and the role of pointers is fundamental for writing efficient and error-free C code.

#### Variable Declaration

- Variables in C must be declared with a specific type before they can be used. The type determines the size and layout of the variable's memory; common types include `int`, `float`, `char`, etc.
- C also allows for variable initialization at the point of declaration.

#### Scope

- **Local Scope**: Variables declared within a function or block `{}` are local to that function or block. They are created upon entering the function or block and destroyed upon exiting.
- **Global Scope**: Variables declared outside of all functions are global. They are accessible from any function within the same file.

#### The `const` Qualifier

- The `const` qualifier can be used to declare variables whose value will not change after initialization, making them immutable. This is important for ensuring the integrity of data that should not be modified.

#### Pointers

- Pointers in C are variables that store memory addresses. They are powerful tools for dynamic memory management and for manipulating arrays, strings, and other data structures.

### Storage Classes in C

C has four storage classes that determine the lifetime, visibility, and linkage of variables:

- **auto**: The default storage class for local variables. `auto` variables have automatic storage duration, which means they are automatically allocated upon entering their block and deallocated upon exiting it. This storage class is rarely specified explicitly.
  
- **register**: Hints to the compiler that a variable should be stored in a CPU register for faster access. However, the use of this storage class is a request, not a command; the compiler can ignore it. `register` variables have automatic storage duration and no linkage.
  
- **static**: Variables declared with `static` have static storage duration, meaning they are allocated when the program starts and deallocated when the program ends. For local variables, `static` extends their lifetime to the entire execution of the program, preserving their value between function calls. Global `static` variables or functions are visible only within the file they are declared in, due to internal linkage.
  
- **extern**: Used to declare a global variable or function in another file. The `extern` storage class gives a variable or function external linkage, allowing it to be visible in other files besides the one in which it is declared.

### Lifetimes and Visibility

- **Lifetime**: The lifetime of a variable in C refers to the duration a variable exists in memory during the program's execution. Local variables typically have automatic lifetime, which is limited to the block they are defined in, whereas global variables, and those declared `static`, have a lifetime that spans the entire execution of the program.
  
- **Visibility and Linkage**: The visibility of a variable or function refers to which parts of a program can access it. This is controlled by the variable's linkage: external linkage (accessible from other files), internal linkage (accessible only within the file), or no linkage (local variables).

### Code Examples

#### Variable Declarations and Scope

```c
#include <stdio.h>

int globalVar = 100; // Global variable

void function() {
    int localVar = 50; // Local variable
    printf("Local variable: %d\n", localVar);
}

int main() {
    function();
    printf("Global variable: %d\n", globalVar);
    return 0;
}
```

#### Using `const` for Immutability

```c
#include <stdio.h>

int main() {
    const int readOnly = 10; // readOnly cannot be modified
    // readOnly = 20; // Uncommenting this line would cause a compilation error

    printf("Constant value: %d\n", readOnly);
    return 0;
}
```

#### Pointers

```c
#include <stdio.h>

int main() {
    int var = 20;      // Actual variable declaration
    int *ip;           // Pointer variable declaration

    ip = &var;  // Store address of `var` in pointer variable

    printf("Address of var variable: %p\n", (void *)&var);

    // Access the value using the pointer
    printf("Value of *ip variable: %d\n", *ip);

    return 0;
}
```
