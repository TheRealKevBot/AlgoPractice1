/*
 * Complete the 'rotLeft' function below.
 
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 
*/

/* 

* Sample Input:
* a d
* 1 2 3 4 5

* Sample Output:
* 5 1 2 3 4

*/



const example = {
    a: [1, 2, 3, 4, 5],
    d: 4
}

function rotLeft(a, d) {
    console.log('Get back half from d', a.slice(d)) // Get the back half from d, should only get 5
    console.log('The slice of the front portion', a.slice(0, d)) // Get the front portion from, index 0 to d 
    let newArray = [...a.slice(d), ...a.slice(0, d)]
    return newArray
}

// Slice the array 
// Get the back half from d, should only get 5
// Get the front portion from, index 0 to d 
// Spread operator remaining array of d slice, and then spread operator front portion to the back
// Array has now moved D to the left 

console.log('Answer:', rotLeft(example.a, example.d))