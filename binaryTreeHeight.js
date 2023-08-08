function findTreeHeight(root) {
    if (!root) {
        return - 1
    }

    return 1 + Math.max(findTreeHeight(root.left), findTreeHeight(root.right))
}
function array10x(nums, index) {
    if (index >= nums.length - 1) {
        return false
    }

    return nums[index + 1] === 10 * nums[index] || array10x(nums, index + 1)
}

console.log(array10x([1, 2, 20], 0) === true)
console.log(array10x([3, 30], 0) === true)
console.log(array10x([3], 0) === false)
console.log(array10x([], 0) === false)
console.log(array10x([3, 3, 30, 4], 0) === true)
console.log(array10x([2, 19, 4], 0) === false)
console.log(array10x([20, 2, 21], 0) === false)
console.log(array10x([20, 2, 21, 210], 0) === true)
console.log(array10x([2, 200, 2000], 0) === true)
console.log(array10x([0, 0], 0) === true)
console.log(array10x([1, 2, 3, 4, 5, 6], 0) === false)
console.log(array10x([1, 2, 3, 4, 5, 50, 6], 0) === true)
console.log(array10x([1, 2, 3, 4, 5, 51, 6], 0) === false)
console.log(array10x([1, 2, 3, 4, 4, 50, 500, 6], 0) === true)