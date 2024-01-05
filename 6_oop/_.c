// C doesnt have 'this' as a keyword, its just a convention
// You can use static functions in your C file to create "private" functions that are not accessible from other files.

#include <stdio.h>

typedef struct Point Point; // Forward declaration is a declaration of a variable, function, or type that tells the compiler that this entity exists and will be defined later in the code.

// define a struct with type signatures
struct Point
{
    int x;
    int y;
    void (*move)(Point *, int, int);
    void (*print)(Point *);
};

// implement methods that take in a pointer to the struct
void move_point(Point *this, int dx, int dy)
{
    this->x += dx;
    this->y += dy;
}

void print_point(Point *this)
{
    printf("Point at (%d, %d)\n", this->x, this->y);
}

// implement constructor that attaches methods, and params to the returned struct
Point create_point(int x, int y)
{
    Point new_point;
    new_point.x = x;
    new_point.y = y;
    new_point.move = move_point;
    new_point.print = print_point;
    return new_point;
}

// main
int main()
{
    Point p1 = create_point(0, 0);
    Point p2 = create_point(5, 5);

    p1.print(&p1); // Output: Point at (0, 0)
    p2.print(&p2); // Output: Point at (5, 5)

    p1.move(&p1, 2, 3);
    p1.print(&p1); // Output: Point at (2, 3)

    return 0;
}
