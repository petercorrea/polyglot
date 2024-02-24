// gcc _.c -o _ && ./_
// C - Variables & Types

// "Automatic storage duration" means the variable is allocated when the block is entered
// and deallocated when the block is exited. Typically, these are stack-allocated.

// "Data segment" refers to a portion of virtual memory that is used to store initialized
// static variables. These variables persist for the lifetime of the program.

// "Static storage duration" means the variable is allocated when the program starts and
// deallocated when the program ends.

// "External linkage" means the variable can be accessed from other translation units (i.e., other source files).
// This is in contrast to "internal linkage" where the variable is only accessible within the same translation unit.
// Global variables inherently have "static storage duration" and "file scope."

// "Volatile" tells the compiler not to optimize the variable, ensuring that each read/write
// operation is performed directly to/from memory. This is important for variables that can
// be changed asynchronously (e.g., hardware registers).

// "Register" for CPU register storage (largely obsolete)

int main()
{
    int a = 10; // Stack-allocated, block scope, automatic storage duration

    // Static Variable
    static int b = 20; // Data segment, block scope, static storage duration

    // Global Variable
    extern int c; // External linkage, file scope, static storage duration

    // Register Variable
    register int d = 30;

    // Volatile Variable
    volatile int e;

    return 0;
}
