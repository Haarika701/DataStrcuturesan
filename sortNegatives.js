const isNegative = val => (val < 0);

function bubbleSortNegatives(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      const cur = array[j];
      const next = array[j + 1];
        
      // (false < true) === true
      // (true < false) === false
      if (isNegative(cur) < isNegative(next)) {
        array[j] = next;
        array[j + 1] = cur;
      }
    }
  }
  
  return array;
}

console.log(bubbleSortNegatives([1,2,-5,10,-200,3,79,-19,100]))