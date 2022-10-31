// Practice Problem: Parent To Child From Array

// Here's my solution : 

// Basically looping through every parent using them as a key and assigning an array of children values

function parentToChild(Input) { 

  let map = new Map()
  for(let i=0; i<Input.length; i++){
    if(!map.has(Input[i][1])){
      let childArray = []
      childArray.push(Input[i][0])
      map.set(Input[i][1], childArray)
    } else {
      let childArray = map.get(Input[i][1])
      childArray.push(Input[i][0])
      map.set(Input[i][1], childArray)
    }
    if(!map.has(Input[i][2])){
      let childArray = []
      childArray.push(Input[i][0])
      map.set(Input[i][2], childArray)
    } else {
      let childArray = map.get(Input[i][2])
      childArray.push(Input[i][0])
      map.set(Input[i][2], childArray)
    }
  }
  console.log(map)
  map.forEach((value, key, map) => {
    console.log(key + " is the parent of " + value)
})
}
