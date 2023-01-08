function selectionSort(input){
  for(let i = 0 ; i < input.length ; i++){
    let min = i ;
    for(let j = i + 1; j < input.length ; j++){
        if(input[min] > input[j]){
            min = j;
        }
        if(min !== i){
            let temp = input[i]
            input[i] = input[min]
            input[min] = temp
        }
    }
  }
  return input
}