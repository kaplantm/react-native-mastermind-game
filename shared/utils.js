import { AsyncStorage } from "react-native";

export const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem("@MMStore:" + key, data.toString());
  } catch (error) {
    console.log("Failed to save data.");
  }
};
export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem("@MMStore:" + key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log("Failed to retreive data.");
  }
};

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
  let newCodeList = [];
  let newGuessList = [];

  let intersection = [...code].filter(element => {
    if (element != undefined) {
      let bool = guess.includes(element);
      delete code[code.indexOf(element)];
      delete guess[guess.indexOf(element)];
      return bool;
    } else {
      return false;
    }
  });
  containsScore = intersection.length;

  return {
    exactScore: exactScore,
    containsScore: containsScore,
    hasWon: false
  };
};

const calculateExactMatches = (code, guess) => {
  let exactScore = 0;

  let newCodeList = [];
  let newGuessList = [];
  //return exact score and lists with exacts removed

  code.forEach((element, index) => {
    if (guess[index] != code[index]) {
      newCodeList.push(code[index]);
      newGuessList.push(guess[index]);
    } else {
      exactScore++;
    }
  });

  return {
    exactScore: exactScore,
    containsScore: 0,
    code: newCodeList,
    guess: newGuessList,
    hasWon: false
  };
};
