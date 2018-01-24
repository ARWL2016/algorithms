// valid inputs:
// 1.2.3.4
// 123.45.67.89

// invalid inputs:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

function isValidIP(str) {
  console.log(str);

  if (str.indexOf(' ') > -1) return false;
  const arr = str.split('.');

  if (arr.length !== 4) {
    return false;
  }

  let isValid = true;

  arr.forEach(item => {
    if (isNaN(+item)) {
      isValid = false;
    }
    if (+item > 255 || +item < 0) {
      isValid = false;
    }
    if (+item > 0 && item.substring(0, 1) === '0') {
      isValid = false;
    }
  })
  return isValid;
  
}

const a = '123.45.67.89';
const b = '1.2.3.4';

const c = '1.2.3.4.5';
const d = '123.045.067.089';
const e = 'a.b.c.d';

console.log(isValidIP(a));
console.log(isValidIP(b));
console.log(isValidIP(c));
console.log(isValidIP(d));
console.log(isValidIP(e));