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
  let score;

  if (code.join("") === guess.join("")) {
    score = {
      score: { exactScore: code.length, containsScore: 0, hasWon: true }
    };
  } else {
    score = {
      score: calculatePartialMatches(
        calculateExactMatches([...code], [...guess])
      )
    };
  }
  return score;
};

const calculatePartialMatches = ({
  code,
  guess,
  containsScore,
  exactScore
}) => {
  [...code].forEach((element, index) => {
    let otherIndex = guess.indexOf(element);
    if (otherIndex != -1) {
      code.splice(index, 1);
      guess.splice(otherIndex, 1);
      containsScore++;
    }
  });

  return {
    containsScore: containsScore,
    exactScore: exactScore,
    hasWon: false
  };
};

const calculateExactMatches = (code, guess) => {
  let exactScore = 0;

  [...code].forEach((element, index) => {
    if (guess[index] == code[index] && guess[index] != undefined) {
      code.splice(index, 1);
      guess.splice(index, 1);
      exactScore++;
    }
  });
  return {
    exactScore: exactScore,
    containsScore: 0,
    code: code,
    guess: guess
  };
};
