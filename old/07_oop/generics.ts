// Types
type Circle = {
  kind: "Circle";
  radius: number;
};

type Square = {
  kind: "Square";
  length: number;
};

// Discriminate Unions
type Shape = Circle | Square;

const area = (shape: Shape) => {
  switch (shape.kind) {
    case "Circle":
      return Math.PI * shape.radius ** 2;
    case "Square":
      return shape.length * 2;
    // It's a good practice to handle every case in a union type
    // The 'never' type here ensures that every case is handled
    default:
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
  }
};

// Generic Types
type List<T> = {
  value: T;
  next: List<T> | null;
};

const numbers: List<number> = {
  value: 1,
  next: {
    value: 2,
    next: null,
  },
};

const letters: List<string> = {
  value: "a",
  next: {
    value: "b",
    next: null,
  },
};

// Generic Types w/ Type Constraints
type Constraint = { name: string };
type WithName<T extends Constraint> = T & { isNamed: boolean };

const person: WithName<{ name: string; age: number }> = {
  name: "Alice", // acts as the constraint
  age: 25,
  isNamed: true, // added prop
};

// Error: Property 'name' is missing in type '{ age: number }'
// const wrong: WithName<{ age: number }> = { age: 30, isNamed: true };

// Type Predicates
type Bird = {
  fly(): void;
  layEggs(): void;
};

type Fish = {
  swim(): void;
  layEggs(): void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  // isFish is a type guard that uses a type predicate 'pet is Fish'
  // When isFish(pet) returns true, TypeScript knows that pet is of type Fish within the if block.
  return (pet as Fish).swim !== undefined;
}

let pet: Fish | Bird = {
  swim() {
    console.log("Im swimming");
  },
  layEggs() {
    console.log("Im laying eggs");
  },
};

if (isFish(pet)) {
  pet.swim(); // TypeScript knows pet is Fish here
} else {
  pet.fly(); // TypeScript knows pet is Bird here
}

// Union Types
type StringOrNumber = string | number;
let value: StringOrNumber;
value = "Hello";
value = 42;
// value = true // err

// Intersection Types
type Draggable = { drag(): void };
type Resizable = { resize(): void };

type UIWidget = Draggable & Resizable;

let widget: UIWidget = {
  drag() {
    /* ... */
  },
  resize() {
    /* ... */
  },
};

// Type Guards: if (pet is Fish) { ... }

// Mapped Types
// ex 1
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// ex 2
type ReadOnly<T> = { readonly [P in keyof T]: T[P] };
type User = { name: string; age: number };
type ReadOnlyUser = ReadOnly<User>;

let user: ReadOnlyUser = { name: "Alice", age: 30 };
// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

// Conditional Types
type Check<T> = T extends string ? "String" : "Not a String";
type Type1 = Check<string>; // "String"
type Type2 = Check<number>; // "Not a String"

// Indexed Access Types
type Person = { name: string; age: number };
type UserName = Person["name"]; // string

// Utility Types
// Partial: Make all properties optional
type PartialUser = Partial<{ name: string; age: number }>;

// Required: Make all properties required
type RequiredUser = Required<{ name?: string; age?: number }>;

// Readonly: Make all properties readonly
type ReadonlyUser = Readonly<{ name: string; age: number }>;

// Record: Create a type with a set of properties of a certain type
type UsersById = Record<number, User>;

// Pick: Pick a set of properties from a type
type UserNameAge = Pick<User, "name" | "age">;

// Omit: Omit a set of properties from a type
type UserWithoutAge = Omit<User, "age">;

// Generic Functions
const identity = <T>(arg: T): T => {
  return arg;
};

console.log(identity<string>("Peter"));

// Generic Classes
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

let stringBox = new Box("Hello World"); // Box of string
let numberBox = new Box(42); // Box of number
