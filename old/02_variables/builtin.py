# Python Built-in Functions

#### Mathematical Functions
sum() - Sums start and the items of an iterable
pow() - Return base to the power exp
abs() - Return the absolute value of a number
divmod() - Return a pair of numbers consisting of their quotient and remainder

max() - Return the largest item in an iterable
min() - Return the smallest item in an iterable

round() - Return number rounded to ndigits precision after the decimal point
  
#### Logic and Conditions
all() - Return True if all elements of the iterable are true
any() - Return True if any element of the iterable is true
bool() - Return a Boolean value

#### Data Conversion
str() - Return a str version of object
int() - Return an integer object constructed from a number or string
float() - Return a floating point number from a number or string
complex() - Return a complex number with the value real + imag*1j
bin() - Convert an integer number to a binary string
hex() - Convert an integer number to a lowercase hexadecimal string
oct() - Convert an integer number to an octal string
ascii() - Return a string with a printable representation of an object
chr() - Return the string representing a character
ord() - Return an integer representing the Unicode code point of a character
repr() - Return a string containing a printable representation of an object

### Dealing with Objects
super() - Return a proxy object that delegates method calls to a parent or sibling
classmethod() - Transform a method into a class method
staticmethod() - Transform a method into a static method
callable() - Return True if the object argument is callable, False if not
isinstance() - Return True if the object argument is an instance of an object
issubclass() - Return True if class is a subclass of classinfo

property() - Return a property attribute
hasattr() - True if the string is the name of one of the object’s attributes
getattr() - Return the value of the named attribute of object
setattr() - Counterpart of getattr()
delattr() - Deletes the named attribute, provided the object allows it

type() - Return the type of an object
hash() - Return the hash value of the object
id() - Return the “identity” of an object

#### Data Structures
list() - Mutable sequence type
set() - Return a new set object
tuple() - Immutable sequence type
dict() - Create a new dictionary

object() - Return a new featureless object
slice() - Return a sliced object representing a set of indices
bytes() - Return a new “bytes” object
bytearray() - Return a new array of bytes
frozenset() - Return a new frozenset object

#### List Like Operations
len() - Return the length (the number of items) of an object
sorted() - Return a new sorted list from the items in iterable
reversed() - Return a reverse iterator

map() - Return an iterator that applies a function to every item of iterable
filter() - Construct an iterator from an iterable and returns true
enumerate() - Return an enumerate object

iter() - Return an iterator object
aiter() - Return an asynchronous iterator for an asynchronous iterable
zip() - Iterate over several iterables in parallel
next() - Retrieve the next item from the iterator

#### Debugging and Meta-programming
compile() - Compile the source into a code or AST object
eval() - Evaluates and executes an expression
exec() - Supports dynamic execution of Python code

breakpoint() - Drops you into the debugger at the call site
help() - Invoke the built-in help system

dir() - Return the list of names in the current local scope
globals() - Return the dictionary implementing the current module namespace
locals() - Update and return a dictionary with the current local symbol table
vars() - Return the dict attribute for any other object with a dict attribute

#### Input/Output
input() - Takes an input and converts it into a string
open() - Open file and return a corresponding file object
print() - Print objects to the text stream file
format() - Convert a value to a “formatted” representation

#### Other Functions
import() - Invoked by the import statement
