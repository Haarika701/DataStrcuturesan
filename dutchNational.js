/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
$         &
2 0 2 1 1 0         curr = 2
  $     &         swap 2 with 0
0 0 2 1 1 2         curr =  0          
  c                swap 1 with 0 


 if nums[curr] = 0 , swap with p0
 if nums[curr] = 2 swap with p2
 bubble sort algo => o(n^2)
 one pass => two pointer solution
 approach 
 initielaise right and left boundaries as p0 and p = n - 1
 during execution , nums[idx < p0] = 0
 during execution , nums[idx > p2] = 2
 intialize curr = 0
 while curr <= p2
    if nums[curr] = 0 , swap with p0
    if nums[curr] = 2 , swap with p2
    if nums[curr] = 1 , curr to the right
 */
    var sortColors = function(nums) {
        let p0 = 0;
        let curr = 0
        let p2 = nums.length - 1
        while( curr <= p2){
            if(nums[curr] === 0){
                let temp = nums[p0];
                nums[p0++] = nums[curr];
                nums[curr++] = temp
            }else if (nums[curr] == 2){
                let temp = nums[curr]
                nums[curr] = nums[p2]
                nums[p2--] = temp;
            }else curr++
        }
    };

    const sortColors = (nums) => {
        const swap = (x, y) => {
          [nums[x], nums[y]] = [nums[y], nums[x]];
        };
      
        let [left, middle, right] = [0, 0, nums.length - 1];
      
        while (middle <= right) {
          const num = nums[middle];
          if (num === 2) {
            swap(right, middle);
            right--;
          } else if (num === 0) {
            swap(left, middle);
            left++;
            middle++;
          } else {
            middle++;
          }
        }
      
        return nums;
      };