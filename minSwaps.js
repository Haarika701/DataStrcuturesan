// Problem Statement
// 
// Given an array of 0s and 1s, what is the minimum number of moves ("swaps") needed to group
// all 0s on one side and 1s on the other side. A "move" is a swap between any adjacent positions.

// Examples

// 1. [0, 1] => 0, no swaps are needed since they are already grouped.

// 2. [0, 1, 0] => 1, swap 1 with either 0 to group them.

// 3. [1, 0, 1, 1, 0] => 2, swap 0 with 1 then swap it again with the next 1.

// 0 [1, 0, 1, 1, 0]
// 1 [1, 1, 0, 1, 0]
// 2 [1, 1, 1, 0, 0]

//  0  1  2  3  4
// [1, 1, 1, 0, 0]

// new example
//     V     v  v     v
// [1, 0, 0, 1, 1, 0, 1, 0]
// leftMost0


let arr = [1, 0, 0, 1, 1, 0, 1, 0];
let leftMost0 = 0;
let swapsToMoveOnesToTheLeft = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    swapsToMoveOnesToTheLeft += i - leftMost0;
    leftMost0++;
  }
}

let leftMost1 = 0;
let swapsToMoveZeroesToTheLeft = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    swapsToMoveZeroesToTheLeft += i - leftMost1;
    leftMost1++;
  }
}

console.log(swapsToMoveOnesToTheLeft);
console.log(swapsToMoveZeroesToTheLeft);
console.log(Math.min(swapsToMoveOnesToTheLeft, swapsToMoveZeroesToTheLeft));


// Start: [0, 1, 1, 1, 0]  
// Target: [0, 0, 1, 1, 1]   (3 swaps)


// Naive Approach:
// Iterating through the array:


// Edge case

// Input: [1] => 0
// Input: [0] => 0
// Input: [] => ??????

// Function Signature

// function minSwaps(input: Array): number