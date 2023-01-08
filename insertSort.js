// Q. Given an unsorted array, perform insertion sort in ascending order.



// Examples:

// • Given an array: [1] // returns [1]

// • Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
function insertionSort(input){
    for(let i = 1; i < input.length ; i++){
        let key = input[i]
        let j = i - 1;
        while(j >= 0 && input[j]){
            input[j+ 1] = input[j]
            j = j - 1;
        }
        input[j + 1] = key
    }
    return input
}
