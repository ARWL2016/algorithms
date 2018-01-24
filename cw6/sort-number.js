const sortSequence = (arr) => {
  const container = []; 
  let slice = 0;

  for (let i=0; i<arr.length; i++) {
    if (arr[i] === 0) {
      const sliced = arr.slice(slice, i+1); 
      slice = i + 1; 
      sliced.sort((a,b) => a-b).push(sliced.shift()); 
      container.push(sliced);  
    } 
  }

  const result = container.sort((a, b) => a.reduce((acc, val) => acc + val) - b.reduce((acc, val) => acc + val))
      .reduce((a, b) => a.concat(b)); 

return result; 

}

 
 let result = sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]);
 console.log(result); 
// [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0])