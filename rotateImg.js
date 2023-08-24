// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.


 transpose input matrix rows diagnolly 
 rows reverse order in place 


 */
 var rotate = function(matrix) {
    //iterate through the matrix
    for(let i = 0 ; i < matrix.length ; i++){
        for(let j = 0;j <i ; j++){
        //swap cells diagnolly
         //assign a temp var of matrix at i and j
         let temp = matrix[i][j]
       //swap rows and columns 
       matrix[i][j] = matrix[j][i]
       //assign the swapped matrix to tempcell
       matrix[j][i] = temp
        }
    }
    
      matrix.forEach((row) =>{
          row.reverse()
      })
    //reverse each row of the matrix
    
};