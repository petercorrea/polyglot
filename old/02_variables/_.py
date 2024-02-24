# everything is a variable, 
# constants and immutability are not concepts, 
# booleans are capitalized 
# types are dynamic (determined at runtime)
# scope: lexical, doesnt apply to loops or conditionals, list comprehensions are scoped
#   Python follows the LEGB (Local, Enclosing, Global, Built-in) scope rule.
#   The 'global' and 'nonlocal' keywords modify variable scope.

int_var = 1  
float_var = 1.0  
str_var = "string"  
bool_var = True

# Conditionals and loops are not scoped
if True:
    x = 10
print(x)  # still accessible outside the if block

for i in range(3):
    pass
print(i)  # still accessible outside the for loop

# List comprehension add a scope
result = [i for i in range(3)]

try:
    print(i)  # Raises NameError, i is not defined
except NameError:
    print("i is not defined")
