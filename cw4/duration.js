const dictionary = [['years', 31536000], ['days', 86400], ['hours', 3600], ['minutes', 60]];


function formatDuration(seconds) {
  let result = []; 
  let secondsRemaining = seconds; 

  while (dictionary.length > 0) {
    const x = Math.floor(secondsRemaining / dictionary[0][1]);
    const remainder = secondsRemaining % dictionary[0][1];
    console.log({ x, remainder });
    if (x >= 1) {
      result.push(formatLabel(x, dictionary[0][0]));
      let secondsRemaining = remainder;
      console.log({secondsRemaining})
    }
    // console.log(dictionary);
    dictionary.shift();
  }

  result.push(formatLabel(secondsRemaining, 'seconds'));

  
  
  return result;
}

function formatLabel(num, timescale) {
  if (num === 0) return '';
  else if (num === 1) return num + ' ' + timescale.slice(0, timescale.length -1);
  else return num + ' ' + timescale;
}

// console.log(formatLabel(0, 'minutes'));

const res = formatDuration(90);

console.log(res);

// Test.assertEquals(formatDuration(1), "1 second");
// Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
// Test.assertEquals(formatDuration(120), "2 minutes");
// Test.assertEquals(formatDuration(3600), "1 hour");
// Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
// 1 day - 86400
// year 31536000