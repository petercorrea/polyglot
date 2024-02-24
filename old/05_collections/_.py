# LIST: mutable, negative indexing, slicing with [:] performs copies
# append, insert, pop, remove, index, count, sort, reverse, copy, extend, clear

# dont use 'len(arr) > 0' to test for emptiness; use 'if arr'
list = [1, 2, 3]

# swapping indices
list[2] = list[1]

# List Comprehensions
squares = [x * x for x in range(5)]

# Looping through lists
for index, item in enumerate(list):
    pass

# looping multiple lists
for index, item in zip(list1, list2):
    pass

# in and not in operators
12 in [1, 2, 12]
12 not in [1, 2]

# destructuring
table, chair, rack, shelf = ['table', 'chair', 'rack', 'shelf']

# * operator
head, *tail = [1, 2, 3, 4] # head = 1, tail = [2, 3, 4]

# TUPLES are immutable, support destructuring
# index, count
tup = (1, 2, 3)

# DICT: keys, values, items, get, setdefault, update, pop, popitem, clear
dct = {'key1': 'value1', 'key2': 'value2'}

# ** operator
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_a, **dict_b}
dict_c # {'a': 1, 'b': 3, 'c': 4}

# SET: add, update, remove, discard, pop, clear, union, intersection, difference
st = {1, 2, 3}
# s | t # union
# s & t # intersection
# s ^ t # symmetric difference
# s - t # unique elements in first set

# STRING
my_name = 'Alice' 'Bob' # AliceBob
'Alice' * 5 # 'AliceAliceAliceAliceAlice'
print(f'Hi, {my_name}')
