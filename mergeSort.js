// Q. Given an unsorted array, perform merge sort in ascending order.

// Examples:
// • Given an array: [1] // returns [1]
// • Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
/*initialise empty arrays for storing one part of the array and result
sort one part of the array 
    iterate through stored part of the array 
    split subarrays into half till it becomes an indvidual unit
    merge the unit subarrays into one by sorting
    merge the sorted subarrays 
 */

    function mergeSort(array){
        let subArray1 = []
        let result = []
        let i = subArray1
        for(; i < subArray1 + result;i++){
            result.push(array[i])
        }
        for(; i < subArray1 + result; i++ ){
            result.push(array[i])
        }
    }