/* bubble sort 
compare with the adjacent elements from lowest to highest

[3,1,2,4] => [1,2,3,4]
1st step => [3,1,2,4] =>[]
             $ ^    => compare a[i] with a[j] => if a[j] > a[j + 1] 
                    => swap positions by creating a temp var
                       [1,3,2,4]
                       => else move on to next element

                       test cases 
                       [3,1,2,4] => [1,2,3,4]
                       [1] =>[1]
                       [] =>[]
                       [10,-1,1,5]

                       time complexity => o(n^2), space complex => o(1)
*/

function bubbleSort(input){
    for(let i = 0; i < input.length; i++){
      console.log(input[i])
      for(let j = 0 ; j < input.length ; j++){
        let [curr,next] = [input[j], input[j + 1]]
          if(input[j] > input[j + 1]){
              input[j] = next
              input[j + 1] = curr
          }
      }
    }
    return input
  }

console.log(bubbleSort([3,1,2,4]))
// console.log(bubbleSort)
// console.log(bubbleSort)
// console.log(bubbleSort)
// console.log(bubbleSort)