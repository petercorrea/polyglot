// Include Guards : Always use include guards in header files to prevent double inclusion.

// definitions
#ifndef MODULE1_H
#define MODULE1_H

#define PI 3.14159

typedef struct
{
    int x;
    int y;
} Point;

int add(int a, int b);
void print_point(Point p);

#endif