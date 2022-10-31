// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
function targetSum(list,k){
    for (let i=0; i<list.length ; i++){
        for (let j=i+1; j<list.length; j++){
            if (list[i]+list[j]==k)
                return true;
        }
    }
    return false;
}

function targetSum2(list,k){
    let result = new Map();
    for(let num of list){
        if(num.has(result)){
           result.set(k-num)
            return true
        }
    }
    return false
}

console.log(targetSum2([-10, 15, 3, 7],-3))
