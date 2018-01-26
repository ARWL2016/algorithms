// Smart answer using ~~ 

function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');

  while (a.length || b.length || c) {
    //  the ~~ just turns an undefined into a 0
    // if c is true, it gets implicitly coerced to 1
    c += ~~a.pop() + ~~b.pop();

    // add the units onto the result 
    res = c % 10 + res;

    // if there is something to carry, convert c to TRUE and trigger while loop again
    c = c > 9;

  }
  return res.replace(/^0+/, '');
}

console.log(sumStrings('9', '8'));