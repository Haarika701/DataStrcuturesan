/* #include <iostream>
using namespace std;

void ReverseSpiral(int m, int n, int a[r][c])
{
long int input[100];
int i, x = 0, y= 0; // x - starting row index and y- starting column index
int z = 0; // Counter for the 1D array that will store the spiral form 
int size = m*n; //Total number of elements
while (x < m && y < n)
{
	int val;
	for (i = y; i < n; ++i)
	{
	// printf("%d ", a[x][i]);
		val = a[x][i];
		input[z] = val;
		++z;
	}
x++;


/* Print the last column from the remaining columns 
for (i = x; i < m; ++i)
{
	// printf("%d ", a[i][n-1]);
	val = a[i][n-1];
	input[z] = val;
	++z;
}
n--;


if ( x < m)
{
	for (i = n-1; i >= y; --i)
	{
		printf("%d ", a[m-1][i]);
		val = a[m-1][i];
		input[z] = val;
		++z;
	}
m--;
}


if (y < n)
{
	for (i = m-1; i >= x; --i)
	{
		// printf("%d ", a[i][x]);
		val = a[i][l];
		b[z] = val;
		++z;
	}
y++;
}
}
for (int i=size-1 ; i>=0 ; --i)
{
	cout<<input[i]<<" ";
}
}
int main()
{
int a[r][c] = { {1, 2, 3, 4},{12,13,14,5},{11,16,15,6},{10,9,8,7}};
ReverseSpiral(r, c, a);
return 0;
}
Output 

16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
Complexity Analysis
Time Complexity: O(n) as the for loop runs for n number of times.

Space Complexity: O(n) as the array int a is being taken which occupies space in the memory.
1: If element is traversed while moving DownDown.
2: If element is traversed while moving RightRight.
3: If element is traversed while moving UpUp.
4: If element is traversed while moving LeftLeft.
 */