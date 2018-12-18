import { changePeg, addGuess, resetGuesses } from "./guessActions";
import { generateCode } from "./codeActions";

// FUNCTION / ACTION CREATOR CONSTANTS
export const CHANGE_PEG_FUNCTION = changePeg;
export const GENERATE_CODE_FUNCTION = generateCode;
export const ADD_GUESS_FUNCTION = addGuess;
export const RESET_GUESSES_FUNCTION = resetGuesses;
