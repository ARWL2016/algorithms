// https://www.codewars.com/kata/the-hidden-word/train/javascript 

numMap = ["o", "b", "l", "i", "e", "t", "a", "d", "n", "m"]; 

const hiddenWord = num => {
  return num.toString().split('').map(num => numMap[num]).join(''); 
}

hiddenWord(123); 