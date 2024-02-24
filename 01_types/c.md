# C Language - Types Overview

The C programming language offers a robust system of types that underpins its flexibility and efficiency as a low-level programming language. Understanding these types is crucial for effective C programming, as they dictate how data is stored, manipulated, and interpreted.

#### Primitive Types

- **char**: Represents single characters or small integers. Size: 1 byte.
- **int**: Basic integer type. Size is usually 4 bytes, but can vary based on the platform.
- **float**: Single precision floating point number. Size: 4 bytes.
- **double**: Double precision floating point number. Size: 8 bytes.
- **void**: Represents the absence of type.

#### Modifiers

- **signed**: Default for integer types, can represent positive or negative numbers.
- **unsigned**: Can only represent non-negative numbers, doubling the maximum size of positive numbers that can be stored.
- **short**: Typically used to modify an `int`, making it at least 2 bytes.
- **long**: Extends the size of an `int` or `double`. For `int`, it's at least 4 bytes; for `double` (as `long double`), it increases precision.

#### Qualifiers

- **const**: Indicates that the value cannot be changed.
- **volatile**: Tells the compiler that a variable's value may be changed in ways not explicitly specified by the program, such as by hardware.
- **restrict**: A pointer qualifier that asserts pointers are the only means through which the object it points to can be accessed.

#### Compound Types

- **Arrays**: Homogeneous data structures storing elements of the same type, accessed via indices.
- **Structures (`struct`)**: Collections of variables (possibly of different types) under a single name, allowing different types of data to be grouped together.
- **Unions (`union`)**: Similar to structures, but all members share the same memory location, allowing different data types to occupy the same memory space.
- **Enumerations (`enum`)**: Defines a set of named integer constants.
- **Pointers**: Variables that store memory addresses, allowing indirect access to other variables and dynamic memory management.

#### Type Qualities

- **Static Typing**: Variable types are explicitly declared and checked at compile time.
- **Type Safety**: C offers manual control over memory, which can lead to unsafe operations if not carefully managed. Type safety is not enforced as strictly as in some higher-level languages.
- **Implicit and Explicit Casting**: C allows both implicit type conversions and explicit casting, enabling flexibility in operations between different types but requiring careful management to avoid unexpected behavior.

#### Key Notes

- The actual size of integer types (`int`, `short`, `long`, `long long`) can vary based on the compiler and architecture, though minimum sizes are specified by the C standard.
- C does not have built-in boolean type until C99, which introduced `_Bool`. Before that, integers (`0` for false, non-zero for true) were used to represent boolean values.
- Pointers and arrays in C are closely related, with arrays often decayed to pointers when passed to functions.
- Memory management is manual, with functions like `malloc`, `calloc`, `realloc`, and `free` for dynamic memory allocation.

## Code Examples

### Primitive Types and Modifiers

```c
#include <stdio.h>

int main() {
    char a = 'A'; // Character type
    int b = 100; // Integer type
    float c = 3.14; // Floating point type
    double d = 9.81; // Double floating point type
    unsigned int e = 150; // Unsigned modifier makes it non-negative
    long int f = 1234567890; // Long modifier for extended size
    // Outputting the variables
    printf("char: %c, int: %d, float: %f, double: %f, unsigned int: %u, long int: %ld\n", a, b, c, d, e, f);
    return 0;
}
```

### Compound Types: Arrays, Structs, Unions, Enumerations, Pointers

```c
#include <stdio.h>

// Structure definition
struct Person {
    char name[50];
    int age;
};

// Union definition
union Data {
    int i;
    float f;
    char str[20];
};

// Enumeration definition
enum boolean {
    FALSE, // 0
    TRUE   // 1
};

int main() {
    // Array of integers
    int nums[5] = {1, 2, 3, 4, 5};
    
    // Structure
    struct Person person1;
    person1.age = 30;
    sprintf(person1.name, "John Doe");
    
    // Union
    union Data data;
    data.i = 10;
    
    // Pointer to integer
    int x = 20;
    int *ptr = &x;
    
    // Enum usage
    enum boolean flag;
    flag = TRUE;

    // Outputting the examples
    printf("Array first element: %d\n", nums[0]);
    printf("Person: %s, %d\n", person1.name, person1.age);
    printf("Data union integer: %d\n", data.i);
    printf("Pointer value: %d\n", *ptr);
    printf("Boolean flag: %d\n", flag);

    return 0;
}
```

### Qualifiers: `const`, `volatile`, `restrict`

```c
#include <stdio.h>

int main() {
    const int limit = 100; // Constant, cannot be changed
    volatile int ticks = 0; // Volatile, might be changed unexpectedly
    
    int *restrict ptrA; // Restrict pointer usage for optimization
    int *restrict ptrB;
    int value = 10;
    
    ptrA = &value;
    // ptrB should not point to the same location as ptrA for the duration of ptrA's lifetime to respect `restrict`
    
    // Attempting to modify 'limit' would cause a compilation error
    // limit = 200; // Error

    printf("Constant: %d, Volatile: %d\n", limit, ticks);

    return 0;
}
```
