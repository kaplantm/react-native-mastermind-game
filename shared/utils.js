/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
export const shuffleArray = array => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const compareCode = (code, guess) => {
  code = code.map(element => element.colorIndex);
  guess = guess.map(element => element.colorIndex);

  let exactScore = 0;
  let containsScore = 0;
  let message = "Guess again";

  if (code.join("") === guess.join("")) {
    exactScore = 4;
    containsScore = 0;
    message = "You Win";
  } else {
    code.forEach((element, index) => {
      if (guess.indexOf(element) != -1) {
        if (guess[index] == element) {
          exactScore++;
        } else {
          containsScore++;
        }
      }
    });
  }
  return {
    score: {
      exactScore: exactScore,
      containsScore: containsScore,
      message: message
    }
  };
};
