import { CHANGE_PEG_COLOR, ADD_GUESS, RESET_GUESSES } from ".";

export function changePeg(peg) {
  return {
    type: CHANGE_PEG_COLOR,
    payload: peg
  };
}
export function addGuess(pegList, score, hasWon) {
  //TODO: add guess validation?, or in component b4 this?
  //nvm theres no way to add an invalid guess
  return {
    type: ADD_GUESS,
    payload: { guess: pegList, score: score, hasWon: hasWon }
  };
}

export function resetGuesses() {
  return {
    type: RESET_GUESSES
  };
}
