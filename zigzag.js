// arr[0] < arr[1]  > Given an array of distinct elements of size N, the task is to rearrange the elements of the array in a zig-zag fashion so that the converted array should be in the below form: 

// arr[0] < arr[1]  > arr[2] < arr[3] > arr[4] < . . . . arr[n-2] < arr[n-1] > arr[n]. 
// Input: N = 7 , arr[] = {4, 3, 7, 8, 6, 2, 1} 
// Output: arr[] = {3, 7, 4, 8, 2, 6, 1}
/* 4 3 7 8 6 2 1 , flag = true
if a[0] < a[i + 1]
flag = false   , increment i 

*/

function zigzag(arr){
    
     
        // Flag true indicates relation "<"
        // is expected, else ">" is expected.
        // The first expected relation is "<"
        let flag = true;
     
        for(let i = 0; i <= n - 2; i++)
        {
             
            // "<" relation expected
            if (flag)
            {
                 
                // If we have a situation like A > B > C,
                // we get A > C < B by swapping B and C
                if (arr[i] > arr[i + 1])
                    temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
            }
             
            // ">" relation expected
            else
            {
                 
                // If we have a situation like A < B < C,
                // we get A < C > B by swapping B and C
                if (arr[i] < arr[i + 1])
                     temp = arr[i];
                     arr[i] = arr[i + 1];
                     arr[i + 1] = temp;
            }
             
            // Flip flag
            flag = !flag;
        }
    }
