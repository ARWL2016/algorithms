const XO = (str) => {
    const arr = str.toLowerCase().split(''); 
    let count = 0; 
 
    for (let i=0; i< arr.length; i++) {
      if (arr[i] === 'x') count++; 
      if (arr[i] === 'o') count--; 
    
    }
    return !count;
}

let result = XO("xoox"); 

console.log(result);