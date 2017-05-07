const kookaCounter = (str) => {
  
  let count = 0; 
  const arr = str.split('').filter(letter => letter === 'h' || letter === 'H');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      count ++; 
    } 
  }

  return count;
}

let result = kookaCounter(""); 
console.log(result); 