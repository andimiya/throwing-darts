let array = [1, 5, 11];

array.forEach(scores);

function scores(e, i, arr){
  let score = 0;
  let bonus = 0;

  if (e > 10) {
    score += 0;
  }
  else if (e >= 5 && e <=10 ) {
    score += 5;
  }
  else if (e < 5) {
    score += 10;
    bonus++;
  }
  if (bonus === 4) {
  score = score + 100;
  }
  console.log(score);
  return score;
}



// scoreThrows([1, 5, 11]);  // returns 15
// scoreThrows([15, 20, 30]); // return 0
// scoreThrows([1, 2, 3, 4]); // returne 140

