function descendingOrder(n){
  const result = n.toString().split('').sort((a, b) => b-a).join('');
  return Number(result); 
}

let x = descendingOrder(123456789); 
console.log(x); 


