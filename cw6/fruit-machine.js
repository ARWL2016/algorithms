reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
spin = [0,1,2];
// Test.assertEquals(fruit([reel1,reel2,reel3],spin),0, "Should return: '0'");

function fruit(reels, spin){

  const items = spin.map((num, i) => reels[i][num]);  
  const scoreChart = [null, 'Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild']; 
  
  const values = items.map((result, i) => scoreChart.findIndex(item => item === items[i]));
  
  const pairs = values.filter(y => y !== 10 && values.lastIndexOf(y) !== values.indexOf(y));
  const wilds = values.filter(x => x === 10); 
  const scores = [...wilds, ...pairs ]; 

  let score = 0; 
  if (scores.length > 1) { 
    if (scores.length === 2) {
      score = scores[0]; 
    } else if (scores[0] !== scores[1]) {
      score = scores[1] * 2; 
    } else {
      score = scores[0] * 10; 
    }
  } 

  return score;
}



fruit([reel1, reel2, reel3], spin); 

