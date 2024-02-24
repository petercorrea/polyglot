### Python Variables and Scope

Python's approach to variables and scope is characterized by simplicity and flexibility. Unlike statically typed languages that require variable type declaration, Python uses dynamic typing, allowing variables to be declared without an explicit type. Understanding variable scope, the global and nonlocal keywords, and the immutability of certain data types are key to writing effective Python code.

#### Variable Declaration and Dynamic Typing

- In Python, variables are created the moment you first assign a value to them. No explicit declaration is needed, and the variable type is inferred from the assignment.
- Python allows variable reassignment to values of different types.

#### Scope and the LEGB Rule

- Python follows the LEGB Rule (Local, Enclosing, Global, Built-in) for resolving variable names:
  - **Local**: Names assigned in any way within a function (`def` or `lambda`), and not declared global in that function.
  - **Enclosing**: Names in the local scope of any and all statically enclosing functions (`def` or `lambda`), from inner to outer.
  - **Global (Module)**: Names assigned at the top-level of a module file, or declared global in a `def` within the file.
  - **Built-in (Python)**: Names preassigned in the built-in names module: `open`, `range`, `SyntaxError`,...

#### Global and Nonlocal Keywords

- **`global`**: Used to declare that a variable inside a function is global (outside the function).
- **`nonlocal`** (Python 3+): Used to declare that a variable inside a nested function refers to a variable in the enclosing (non-global) scope.
global and nonlocal keywords allow functions to modify variables defined in outer scopes, directly impacting variable lifetime and visibility across different parts of a program.

#### Immutability

- Some data types in Python, like strings and tuples, are immutable, meaning once they are created, their content cannot be changed.
- Mutability is an important concept because it affects how variable assignments and modifications work, especially when dealing with default arguments in functions or when modifying variables accessed across different scopes.

### Code Examples

#### Variable Declaration and Dynamic Typing

```python
x = 5  # x is of type int
x = "Hello"  # Now x is of type str
print(x)
```

#### Scope Demonstration

```python
x = "global"

def function():
    x = "local"
    print(x)  # Prints "local"

function()
print(x)  # Prints "global"
```

#### Global Keyword Example

```python
x = "global"

def function():
    global x
    x = "modified global"
    print(x)

function()
print(x)  # Prints "modified global"
```

#### Nonlocal Keyword Example

```python
def outer():
    x = "outer local"
    def inner():
        nonlocal x
        x = "inner local"
    inner()
    print(x)  # Prints "inner local"

outer()
```

#### Immutability Example

```python
t = (1, 2, 3)
# t[0] = 4  # Raises a TypeError because tuples are immutable

s = "Python"
# s[0] = "J"  # Raises a TypeError because strings are immutable
```
