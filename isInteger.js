'use strict';

function isInteger(x) {
  if (typeof x === 'number' && !Number.isNaN(x)) {
    var y = Number(x.toFixed(0));
    console.log({y})
    return x === y;
  }
  return false;
}

console.log(isInteger(600000000000000.0001));