### Python Types Overview

Python is a dynamically typed language, which means variable types are not explicitly declared and are determined at runtime. Its type system is robust and flexible, supporting a wide range of data types that cater to various programming needs.

#### Basic Data Types

- **int**: Represents integers, e.g., `5`.
- **float**: Represents floating-point numbers, e.g., `3.14`.
- **str**: Represents strings, sequences of Unicode characters, e.g., `"Hello"`.
- **bool**: Represents Boolean values, `True` or `False`.

#### Complex Data Types

- **list**: Ordered and mutable collections of items, e.g., `[1, 2.5, 'abc']`.
- **tuple**: Ordered and immutable collections of items, e.g., `(1, 2.5, 'abc')`.
- **dict**: Collections of key-value pairs, e.g., `{'name': 'John', 'age': 30}`.
- **set**: Unordered collections of unique items, e.g., `{1, 2, 3}`.

#### Special Types

- **None**: Represents the absence of a value.
- **functions**: Functions are first-class objects in Python, allowing them to be passed around and used as arguments.

#### Type Conversion

Python allows explicit conversion between types, using functions like `int()`, `float()`, `str()`, etc.

### Code Examples

#### Basic Data Types

```python
x = 10             # int
y = 20.5           # float
name = "Alice"     # str
is_valid = True    # bool

print(x, y, name, is_valid)
```

#### Complex Data Types

```python
# List
my_list = [1, 2.5, 'hello']
my_list.append('world')  # Lists are mutable
print(my_list)

# Tuple
my_tuple = (1, 2.5, 'hello')
print(my_tuple)

# Dictionary
my_dict = {'name': 'John', 'age': 30}
print(my_dict['name'])  # Accessing dictionary values

# Set
my_set = {1, 2, 3, 2}
print(my_set)  # Duplicates are removed, output: {1, 2, 3}
```

#### Special Types and Type Conversion

```python
# None type
a = None
if a is None:
    print('a is None')

# Functions
def greet(name):
    return f"Hello, {name}!"

print(greet('Alice'))

# Type conversion
integer = int("50")
floating_point = float("3.14")
string = str(100)
print(integer, floating_point, string)
```

#### Dynamic Typing

```python
var = "I am a string"
print(var)
var = 123  # Now, var is an integer
print(var)
```
