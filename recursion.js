// Find the sum of the integers from 1 through n. Use recursion.
let count = 1; 

function findSumofIntegers(total, n) { 
  if (count <= n) {
    total += count; 
    count += 1; 
    return findSumofIntegers(total, n); 
  } 
  return total; 
  
}

let result = findSumofIntegers(0, 5); 
console.log(result); 