### TypeScript Types Overview

TypeScript is a superset of JavaScript that adds static types to the language. This allows developers to catch errors at compile time rather than at runtime, improving the reliability and maintainability of the code. TypeScript's type system is both powerful and flexible, offering a range of features from basic types to advanced types like generics and utility types.

#### Basic Types

- **Number**: Any numeric value.
- **String**: Textual data.
- **Boolean**: `true` or `false`.
- **Array**: Collections of values of a specific type.
- **Tuple**: Arrays with fixed numbers of elements of specific types.
- **Enum**: A way of giving more friendly names to sets of numeric values.
- **Any**: A type that can be anything, bypassing the type-checking.
- **Void**: The absence of any type, often used as the return type of functions that do not return a value.
- **Null and Undefined**: Represent the absence of a value.
- **Never**: Represents types of values that never occur.

#### Advanced Types

- **Interfaces**: Define the structure that objects should follow.
- **Union Types**: Allow a variable to be one of several types.
- **Type Aliases**: Create a new name for a type.
- **Generics**: Provide a way to create reusable components.
- **Utility Types**: Built-in types that allow for common type transformations.

### Code Examples

#### Basic Types

```typescript
let id: number = 5;
let company: string = "OpenAI";
let isPublished: boolean = true;
let x: any = "Hello";
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "John"],
];

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Undefined and Null
let undef: undefined = undefined;
let nul: null = null;
```

#### Advanced Types: Interfaces, Union, and Generics

```typescript
// Interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // Optional property
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// Function Interface
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Union Type
let pid: string | number;
pid = "22";

// Generic Function
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);
```
