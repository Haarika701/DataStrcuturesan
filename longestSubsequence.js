// Given a string you need to print longest possible substring that has exactly M unique characters. If there are more than one substring of longest possible length, then print any one of them.
// Input: Str = “aabbcc”, k = 1
// Output: 2
// Explanation: Max substring can be any one from {“aa” , “bb” , “cc”}.

// Input: Str = “aabbcc”, k = 2
// Output: 4
//Max substring can be any one from {“aabb” , “bbcc”}.

var lengthOfLIS = function(nums) {
  return backtrack(nums,Number.MIN_SAFE_INTEGER,0);
};

let backtrack = function(nums,prev,curpos){
    
    if(curpos >= nums.length) return 0;
    let taken = 0;
    if(nums[curpos] > prev){
        taken = 1+backtrack(nums,nums[curpos],curpos+1);
    }
    let notTaken = backtrack(nums,prev,curpos+1);
    
    return Math.max(taken,notTaken);
}