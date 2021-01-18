#include <bits/stdc++.h>
#include <typeinfo>
using namespace std;
class myClass
{
};
int main()
{
    cout << INT_MAX << "\t" << INT_MIN << "\n";
    typedef long long ll;
    long long myvalue;
    ll myvalue1;
    typedef vector<int> vi;
    if (12346 & 1) // 0000 0101 & 0000 0001
    {
        cout << "ODD";
    }
    else
        cout << "EVEN";

    int i = 10;
    float f = 3.14;
    myClass c;
    cout << endl
         << "data type of i: " << typeid(i).name();
    cout << endl
         << "data type of f: " << typeid(f).name();
    cout << endl
         << "data type of empty class: " << typeid(c).name();

    
    int i = 10;
    cout << i << "\n";
    cout << &i << "\n";    // & = address of()
    cout << *(&i) << "\n"; // * = value at()

    int arr[3] = {1, 2, 3};
    cout << "\n"
         << sizeof(arr) / sizeof(int);

    cout << *(&arr + 1) - arr; // arr , &arr
    return 0;
}
