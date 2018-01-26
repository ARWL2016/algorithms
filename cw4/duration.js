

function formatDuration(seconds) {

  if (seconds === 0) return 'now';
  
  const dictionary = [['years', 31536000], ['days', 86400], ['hours', 3600], ['minutes', 60]];
  let result = []; 
  let total = seconds; 

  while (dictionary.length > 0) {
    const x = Math.floor(total / dictionary[0][1]);
    const remainder = total % dictionary[0][1];
    if (x >= 1) {
      result.push(formatLabel(x, dictionary[0][0]));
      total = remainder;
    }
    dictionary.shift();
  }

  let label = formatLabel(total, 'seconds');
  if (label) {
    result.push(label);
  }
  
  let str = result.join(', ');
  let finalComma = str.lastIndexOf(',');

  if (finalComma > -1) {
    str = `${str.slice(0, finalComma)} and${str.slice(finalComma + 1)}`;
  }
  return str;
}

function formatLabel(num, timescale) {
  if (num === 0) return '';
  else if (num === 1) return `${num} ${timescale.slice(0, timescale.length -1)}`;
  else return `${num} ${timescale}`;
}

formatDuration(120);


