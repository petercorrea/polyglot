// Ownership (moving)
Ownership Rules
Single Ownership: Each value in Rust has a single "owner" — a variable that holds the value or a reference to it.
Scope: A value is valid from the point at which it is initialized until its owner goes out of scope.
Move Semantics: When ownership is transferred (moved), the original variable can no longer be used to access the value.

All heap data must be owned by exactly one variable.
Rust deallocates heap data once its owner goes out of scope.
Ownership can be transferred by moves, which happen on assignments and function calls (deallocated at end of func).
Heap data can only be accessed through its current owner, not a previous owner.

// References
Default Permissions
By default, a variable has read and own permissions (RO). If a variable is declared with let mut, it also gains write permission (RWO).

How References Change Permissions
When you create a reference to a variable, the permissions on that variable can change:
Immutable Reference (&T): When you create an immutable reference, the variable being referenced loses its write and own permissions (W, O), but retains its read permission (R). This is because multiple parts of the code can read from the variable simultaneously without causing issues, but they should not be able to modify it.
Mutable Reference (&mut T): When you create a mutable reference, the variable being referenced loses all its permissions. This ensures that only the mutable reference can access the data, providing exclusive access for modification.
The mutability of the reference and the mutability of the data it points to are two separate concerns, and both need to be mutable for you to modify the data through the reference.

// Borrowing
Borrowing Rules
Immutable Borrow: You can have multiple immutable references (&T) to a value as long as there are no mutable references.
Mutable Borrow: You can have exactly one mutable reference (&mut T) to a value, and no immutable references can coexist with it.
No Dangling References: References must not outlive the data they point to.

Data can be aliased, data can be mutated, but data cannot be both aliased and mutated...that is the Pointer Safety Principle.
For example, Rust enforces this principle for boxes (owned pointers) by disallowing aliasing. Assigning a box from one variable to another will move ownership, invalidating the previous variable. Owned data can only be accessed through the owner — no aliases.
However, because references are non-owning pointers, they need different rules than boxes to ensure the Pointer Safety Principle. By design, references are meant to temporarily create aliases. So Rust uses its Borrow Checker, which
enforces read, write, and own permissions on variables to ensure a variable has either:
- many immutable references, none mutable references
- one mutable reference at a time, none immutable references

Additional Constraints
Interior Mutability: Rust provides types like RefCell<T> that allow you to mutate the contents even when you have an immutable reference. This is checked at runtime rather than compile-time.
Atomic Operations: Types like AtomicUsize or Mutex<T> allow safe concurrent modification but are outside the purview of the borrow checker.