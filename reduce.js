const arr = [2,10,2]; 

let result = arr.filter((num, ind) => {
  return num === 10 || arr.lastIndexOf(num) !== arr.indexOf(num); 
})

result.sort((a,b)=> {
  return b-a; 
})

console.log(result); 