// elements: [2, 4, 5], input: [2, 5, 5, 4, 2] => [2, 2, 4, 5, 5]
// sort the input array based on 3 elements 
//
function dutchNational(input){
   let low = 0;
   let high = input.length - 1
   let middle = 0;
   while(mid < high){
       if (input[middle] === 0){
        input[low],input[middle] = input[middle],input[low]
        low += 1;
        middle += 1}
        else if (input[middle] === 1){
                middle += 1
        }
        else{
            input[middle],input[high] = input[high],input[middle]
            high -= 1
        }
       }
  return input
   }


//[2,5,5,4,2] 
 //l m h
 //  m<h
//    5<5
//    