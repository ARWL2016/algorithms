// https://www.codewars.com/kata/simple-fun-number-240-increasing-number/train/javascript 

function increasingNumber(x, n) {
  for (let i = 1; i <= n;) {
    if (x % i === 0) {
      i++; 
    } else {
      x++; 
    }
  }
  return x; 
}

result = increasingNumber(1, 100); 
console.log(result); 