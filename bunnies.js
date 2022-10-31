// var reverse = function(string) {
//    if(string.length <= 1) return string;
//     return string.charAt(string.length - 1) + reverse(string.substring(0,string.length - 1)) 

// };
// console.log(reverse("hello"))

// var palindrome = function(string) {


// };
//program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

var sum = function(num) {
if(num.length <= 0){
    return 0;
}
return sum(num,num.length - 1) + num[num.length - 1]
   
};

console.log(sum([1,2,3,4,5,6])); // 21

//The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.