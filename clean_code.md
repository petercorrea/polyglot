# Code Best Practices

Tips:

Keep it simple

Don’t repeat yourself

You arnt gonna need it

Use appropriate naming

Follow conventions and styles

Don’t allow silent or unhandled errors

Use a shared library of utilities across your projects, stop reinventing

Use a decision log

Continuously Iterate and get feedback quick

Plan and pseudo code before writing code

Separation of concerns

Test driven development

Appropriately apply design patterns

Always check your assumptions

Maintain a lifelong learner mentality

Use tools to help you maintain, maintainable code

dont get bogged by jargon and poor naming, remember that similar concepts go by very different names

OO Principles

Favor composition over inheritance

Functional Principles

Pure functions

deterministic

no side effects

immutability

higher order functions

function composition

recursion

referential transparency

a function's output depends solely on its input and does not depend on any external state or context. It allows for code optimization, equational reasoning, and makes it easier to understand and reason about the behavior of functions.

SOLID

Single responsibility

Open to extension, closed to modifications

Liskov Substitution Principle

Subtypes must be substitutable for their base types. It emphasizes that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. In other words, subtypes should adhere to the contract defined by the supertype, ensuring that they can be used interchangeably.

Iterface Segregation Principle

Clients should not be forced to depend on interfaces they do not use. It promotes the idea that interfaces should be specific to the needs of clients, and no client should be forced to depend on methods it does not require. By keeping interfaces focused and tailored to specific clients, the system becomes more decoupled and easier to maintain.

Dependency Inversion Principle

High-level modules should not depend on low-level modules. Both should depend on abstractions. It suggests that dependencies should be abstracted through the use of interfaces or abstract classes, allowing higher-level modules to depend on abstractions rather than concrete implementations. This promotes loose coupling, flexibility, and easier testing and maintenance.

OO Design Patterns

Behavioral

Creational

Structural

Architectural

The 4 Pillars of Object Oriented Programming

Encapsulation

Abstraction

Polymorphism

Inheritance
