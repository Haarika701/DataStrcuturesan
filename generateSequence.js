function generateSequence(x) {
    //set up an empty matrix/array
    var result = []
    //start at 1 and loop up to x
    for(let i = 1; i <= x; i++) {
      //for every iteration, create a new empty array
      const row = []
        //for every new empty array, fill it with j where the length is i
        for(let j = 1; j <= i; j++){     
         row.push(j)
        }
        //push the now filled row into the result matrix
        result.push(row)
    }
    return result
  }
  console.log(generateSequence(2))