//bunny ears 
 // 1 bunny * 2  ears
  //if there are 3 bunnies, 6 years

  function bunnyEars(bunnies){
      if(!bunnies) return 0;
       return 2 +  bunnyEars(bunnies - 1)
  }

  console.log(bunnyEars(3))