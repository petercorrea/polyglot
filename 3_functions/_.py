# Functions have arguments, keyword arguments, default values, explicit return expression
def my_function(arg1=0, arg2=0):
    return arg1 + arg2 

my_function(1, 1)
my_function(arg1=1, arg2=1)

# Lambda Functions
square = lambda x: x * x
square(2) # 4

def make_adder(n):
    return lambda x: x + n
plus_3 = make_adder(3)
plus_3(4) # 7

