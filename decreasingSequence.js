// Practice Problem: Generate matrix with decreasing sequences

// This is my solution:

console.log(generateSequence(6));

function generateSequence(target) {
  let seq = []
  for(let i=0; i<target; i++){
    let val = target-i
    let tempA = []
    for(let j=0; j<target-i; j++){
    tempA.push(val)
    val--
    }
    seq.push(tempA)
  }
  return seq
}