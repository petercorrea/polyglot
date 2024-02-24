// Rust - Control Flow
fn main() {
    if true {
    } else if true {
    } else {
    }

    // Because if is an expression, we can use it on the right side of a let statement to assign the outcome to a variable
    let condition = true;
    let number = if condition { 5 } else { 6 };

    // Match Statement (more powerful to Switch): each arm is executed once, and fall-through is not allowed.
    match 1 {
        1 => {
            // Executes if 1
        }
        _ => {
            // Executes if no cases match
        }
    }

    // 'break' and 'continue' work as in other languages. labels only have 1 qoute, only needed with multiple loops
    'some_label: loop {
        if condition {
            break 'some_label;
        }
    }

    for i in 0..10 {
        // This loop will not include 10
    }

    for i in 0..=10 {
        // This loop will include 10
    }

    while true {}
}
