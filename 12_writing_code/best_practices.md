# Code Best Practices and Principles

A list of common coding practices to help create maintainable, readable code.

## General Tips

- **Keep It Simple**: Aim for simplicity in your code to enhance readability and maintainability.
- **Don’t Repeat Yourself (DRY)**: Avoid code duplication by reusing code and functionalities.
- **You Aren't Gonna Need It (YAGNI)**: Avoid adding functionality until it is necessary.
- **Use Appropriate Naming**: Choose clear, meaningful names for variables, functions, and classes.
- **Follow Conventions and Styles**: Adhere to coding standards and styles to ensure consistency.
- **Handle Errors Gracefully**: Prevent silent failures by properly handling errors.
- **Utilize Shared Libraries**: Use common utility libraries to avoid reinventing the wheel.
- **Maintain a Decision Log**: Keep track of decisions made during development for future reference.
- **Iterate and Seek Feedback**: Continuously refine your code based on feedback.
- **Plan and Pseudocode**: Before coding, outline your approach with planning and pseudocode.
- **Separation of Concerns**: Organize code into distinct sections based on functionality.
- **Test-Driven Development**: Write tests before code to guide design and ensure reliability.
- **Apply Design Patterns Appropriately**: Use design patterns wisely to solve common problems.
- **Verify Assumptions**: Always question and test your assumptions.
- **Lifelong Learning**: Stay curious and continually learn to improve your skills.
- **Utilize Tools for Maintainable Code**: Use tools to help maintain and improve code quality.
- **Avoid Confusing Jargon**: Clarify terminology and avoid unnecessary jargon.

## Object-Oriented (OO) Principles

- **Favor Composition Over Inheritance**: Prefer composing objects over class inheritance.
- **Encapsulation**: Keep data private within a class, exposed only through public methods.
- **Abstraction**: Hide complex implementation details behind simple interfaces.
- **Polymorphism**: Allow objects of different classes to be treated as objects of a common superclass.
- **Inheritance**: Enable new classes to inherit properties and methods from existing classes.

### SOLID Principles

- **Single Responsibility Principle (SRP)**: A class should have only one reason to change.
- **Open/Closed Principle (OCP)**: Classes should be open for extension but closed for modification.
- **Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types without altering the correctness of the program.
- **Interface Segregation Principle (ISP)**: No client should be forced to depend on methods it does not use.
- **Dependency Inversion Principle (DIP)**: Depend on abstractions, not on concretions.

## Functional Programming Principles

- **Pure Functions**: Functions that have no side effects and return the same output for the same input.
- **Immutability**: Avoid changing mutable state and work with immutable data.
- **Higher-Order Functions**: Functions that can take other functions as arguments or return them.
- **Function Composition**: Combine two or more functions to perform a computation.
- **Recursion**: Use functions that call themselves to perform iterations.
- **Referential Transparency**: An expression that can be replaced with its value without changing the program's behavior.
