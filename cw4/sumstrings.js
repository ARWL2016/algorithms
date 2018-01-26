function sumStrings(a, b) {

  let resArray = [];
  let carry = '0';

  for (let i = 1; i <= a.length || i <= b.length; i++) {

    const sum = ((+a[a.length - i] || 0) + (+b[b.length - i] || 0) + +carry).toString();

    if (sum.length === 1) {
      resArray.unshift(sum);
      carry = '0';
    } else {
      resArray.unshift(sum[1]); 
      carry = sum[0];
    }
  }

  if (+carry) {
    resArray.unshift(carry);
  }
  while (resArray[0] === '0') {
    resArray.shift();
  }
  return resArray.join('');
}

const result = sumStrings('00102', '00013');


