try:
    result = 10 / 0 # raises an exception
# error case
except ZeroDivisionError:
    print("Can't divide by zero!")
except (TypeError, ValueError) as e:
    print(f"A TypeError or ValueError occurred: {e}")
# optional catch-all
except Exception as e:
    print(f"An unexpected error occurred: {e}")
# success case
else:
    print("No exceptions were raised.")
# runs during both fail and success case
finally:
    print("This is the cleanup code.")

# common exceptions:
#   SyntaxError
#   AssertionError
#   AttributeError
#   NameError
#   TypeError
#   ValueError
#   LookupError
#   IndexError
#   KeyError
#   ArithmeticError