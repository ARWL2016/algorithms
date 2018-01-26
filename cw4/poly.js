// https://www.codewars.com/kata/55f89832ac9a66518f000118/train/javascript 

let poly = 'a+5ab+3a-c-2a'; 
if (!poly[0].match(/\+|\-/)) {
  poly = '+' + poly;
}

const base = poly.replace(/\+|\-/g, ' $&').split(' ');
base.shift();



// let base3 = []; 

// base2.forEach(str => {
//   let arr = str.replace(/[a-z]/, ' $&').split(' ');
//   base3.push({num: arr[0], letter: arr[1]});
// }); 



console.log(base);