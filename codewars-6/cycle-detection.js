cycle = function(arr){
  let allPatterns = []; 
  let allPatternsArray = []; 
  let str; 
  let result = []; 

  function Pattern (str, start, end) {
    this.str = str;  
    this.start = start; 
    this.end = end; 
    this.length = end - start; 

    return { str, start, end, length: this.length }
  }

  // get an array of all possible patterns 
  for (let i=0; i<=arr.length; i++) {
    for (let j=i+1; j <= arr.length; j++) {
      str = arr.slice(i, j).join(''); 
      let pattern = new Pattern(str, i , j);  
      if (pattern.length > 1 && pattern.length <= arr.length / 2) {
        allPatterns.push(pattern); 
        allPatternsArray.push(str); 
      } 
    }
  }
  console.log(allPatterns, allPatternsArray); 

  // remove non-repeating patterns
  repeatingPatterns = allPatternsArray.filter(pattern => {
    return allPatternsArray.lastIndexOf(pattern) !== allPatternsArray.indexOf(pattern); 
  });

console.log(repeatingPatterns)

  if (repeatingPatterns.length !==0) {
    repeatingPatterns = repeatingPatterns.map(pattern => +pattern); 
  
    let max = repeatingPatterns.reduce((a, b) => Math.max(a, b));

    repeatingPatterns = repeatingPatterns.filter(pattern => pattern === max); 

    stringPattern = max.toString(); 
    let length = stringPattern.length; 
    let firstPosition = allPatternsArray.indexOf(stringPattern); 
    let nextPosition = allPatternsArray.indexOf(stringPattern, firstPosition + 1); 
    let actualStart = allPatterns[firstPosition].start; 
    let actualNext = allPatterns[nextPosition].start; 
    let cyclelength = allPatterns[nextPosition].start - allPatterns[firstPosition].start; 
    let valid = false;  
    if (cyclelength === length) {
      valid = true; 
    }

    console.log(`
      Repeating Patterns: ${repeatingPatterns} 
      Max: ${max}
      Length: ${length}
      First: ${actualStart}
      Next: ${actualNext}
      Cyclelength: ${cyclelength}
      Valid: ${valid}
    `) 

    if (valid) {
      return result = [actualStart, length]
    } else {
      return result = []; 
    }
    
  }
  return result; 

}

let answer = cycle([1, 2, 3, 4, 1, 2, 3, 4, 7]); 

console.log(answer); 
