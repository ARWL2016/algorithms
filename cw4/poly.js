function sortVar(str) {
  return str.split('').sort((a, b) => a > b).join(''); 
}

function simplify(poly) {
  
  if (!poly[0].match(/\+|\-/)) {
    poly = '+' + poly;
  }

  let base = poly
    .replace(/\+|\-/g, ' $&')
    .split(' ')
    .filter(str => str)
    .map(str => {
      let arr = str.replace(/[a-z]/, ' $&').split(' ');
      return {num: arr[0], var: arr[1]}; 
  }); 

  base.forEach(expr => {
    if (expr.num.length === 1) {
      expr.num += '1';
    }
    expr.var = sortVar(expr.var);
    expr.num = Number(expr.num);
  }); 

  base.sort((a, b) => a.var > b.var);

  for (let i = 0; i < base.length - 1; i++) {
    if (base[i].var === base[i+1].var) {
      base[i+1].num += base[i].num; 
      base[i] = null;
    }
  }

  base = base
    .filter(expr => expr)
    .filter(expr => +expr.num !== 0)
    .sort((a, b) => a.var.length > b.var.length);

    
    console.log(base);

  let result = ''; 

  base.forEach(expr => {
    if (expr.num === -1) expr.num = '-'; 
    if (expr.num === +1) expr.num = '+';
    expr.num = String(expr.num);
    if (expr.num[0] !== '+' && expr.num[0] !== '-') {
      expr.num = '+' + expr.num;
    }
    result += expr.num + expr.var;
  })

  // console.log(base);
  console.log(result.replace(/^\+/, ''))
}


simplify('-8dzc-10z-4dcz-12z+2z')
// -20z-12cdz
