function pigIt(str) {
  return str
    .split(' ')
    .map(word =>  word.substring(1) + word.slice(0,1) + 'ay')
    .join(' ');
}


const res = pigIt('Pig latin is cool');

console.log(res);