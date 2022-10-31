function sumNestedList(arr){
    let sum = 0;
  for(let i = 0; i < arr.length ; i++){
    if(Array.isArray(arr[i])){
        sum += sumNestedList(arr[i])
    }
  }
  return sum;
}