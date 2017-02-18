
function scoreThrows(array) {
  let score = 0;

  for (var i = 0; i < array.length; i++) {

    if (array[i] > 10) {
      score = score + 0;
      console.log('no score', score);
    }
    else if (array[i] >= 5 && array[i] <=10 ) {
      score = score + 5;
      console.log('adds 5', score);
    }
    else if (array[i] < 5) {
      score = score + 10;
      console.log('adds 10', score);
    }
  }

//for each dart thrown...
//greater than 10, then 0 points
//if between 5 and 10, then 5 points
//if less than 5, 10 points
  console.log(score);

}

scoreThrows([1, 5, 11]);  // returns 15
scoreThrows([15, 20, 30]); // return 0
scoreThrows([1, 2, 3, 4]); // returne 140