from abc import ABC, abstractmethod

class Animal(ABC):
    clas_var = "class var"
    
    def __init__(self, name, secret=""):
        self.name = name
        self._protected = 'not really protected'
        # encapsulation
        self.__private = secret
        self._can_fly = False

    # TypeError if not implemeted by subclass
    @abstractmethod
    def move(self):
        pass

    def speak(self):
        pass

    def secret(self):
        print(f'{self.__private}') # will print successfully

    # setters and getters: decorate with @property & @PROP.setter
    @property
    def can_fly(self):
        print('getting value of fly')
        return self._can_fly

    @can_fly.setter
    def can_fly(self, bool):
        print('setting value of fly')
        self._can_fly = bool

    # Both static and class methods are bound to the class, not the instance, and thus can be called on the class itself. 
    # The key difference is that class methods have access to the class (and can modify class state), while static methods do not.
    @staticmethod
    def add(x, y):
        print(x + y)
    
    @classmethod
    def multiply(cls, x, y): # must takes in cls as the first param in the definition
        print(cls.clas_var)
        print(x * y)

# inheritance
class Dog(Animal):
    # polymorphism 
    def speak(self):
        print(f'{self.name} says BARK!')
    
    def move(self):
        print("I am moving!")

class Cat(Animal):
    # polymorphism 
    def speak(self):
        print(f'{self.name} says MEOW!')
    
kota = Dog("Dakota", "pin=1234")
print(kota.name)
print(kota._protected)
# print(kota.__private) # AttributeError
kota.secret() # private variables can be accessed indirectly
kota.move()
kota.can_fly = False
kota.can_fly
Animal.add(1, 2)
Animal.multiply(1, 2)
