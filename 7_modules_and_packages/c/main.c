// headers represent a "public" API
// source and main files import the headers.
// using imported implementations
#include "module1.h"

int main()
{
    Point p = {1, 2};
    int result = add(3, 4);

    print_point(p);
    return 0;
}
