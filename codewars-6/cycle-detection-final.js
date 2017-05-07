cycle = function(arr){
  let patternInfo = []; 
  let patternIndex = []; 
  let result = [];

  function Pattern (str, start, end) {
    this.str = str;  
    this.start = start; 
    this.end = end; 
    this.length = end - start; 

    return { str, start, end, length: this.length }
  }

  for (let i=0; i<=arr.length; i++) {
    for (let j=i+1; j <= arr.length; j++) {
      const str = arr.slice(i, j).join(''); 
      const pattern = new Pattern(str, i , j);  
      if (pattern.length > 1 && pattern.length <= arr.length / 2) {
        patternInfo.push(pattern); 
        patternIndex.push(str); 
      } 
    }
  }

  // remove non-repeating patterns
  const repeats = patternIndex.filter(pattern => {
    return patternIndex.lastIndexOf(pattern) !== patternIndex.indexOf(pattern); 
  });

  console.log(repeats); 

  if (repeats.length !==0) {
    const seq = repeats.map(pattern => +pattern).reduce((a, b) => Math.max(a, b)).toString();
 
    const firstPos = patternIndex.indexOf(seq); 
    const nextPos = patternIndex.indexOf(seq, firstPos + 1); 
    const start = patternInfo[firstPos].start; 
    const next = patternInfo[nextPos].start; 
    const interval = patternInfo[nextPos].start - patternInfo[firstPos].start; 

    const valid = interval === seq.length ? true : false; 

    console.log(` 
      Sequence: ${seq}
      Length: ${seq.length}
      First: ${start}
      Next: ${next}
      Interval: ${interval}
      Valid: ${valid}
    `); 

    return result = valid ? [start, seq.length] : []; 
    
  }
  return result; 
}

let answer = cycle([1, 2, 3, 6, 2, 3, 7]); 
console.log(answer); 
