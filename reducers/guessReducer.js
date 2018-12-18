import { CHANGE_PEG_COLOR, ADD_GUESS, RESET_GUESSES } from "../actions";
import Colors from "../shared/Colors";

const guessReducer_initialState = {
  pegEntryList: {
    pegs: [
      { colorIndex: 0, pegIndex: 0, id: "first" },
      { colorIndex: 0, pegIndex: 1, id: "second" },
      { colorIndex: 0, pegIndex: 2, id: "third" },
      { colorIndex: 0, pegIndex: 3, id: "fourth" }
    ]
  },
  guessHistoryList: [],
  hasWon: false
};

export default function guessReducer(
  state = guessReducer_initialState,
  action
) {
  switch (action.type) {
    case CHANGE_PEG_COLOR: {
      let newPegList = [...state.pegEntryList.pegs];
      newPegList[action.payload.pegIndex].colorIndex =
        (action.payload.colorIndex + 1) % state.pegEntryList.pegs.length;
      return { ...state, pegEntryList: { pegs: newPegList } };
    }
    case ADD_GUESS: {
      let defaultGuess = {
        pegs: [
          { colorIndex: 0, pegIndex: 0, id: "first" },
          { colorIndex: 0, pegIndex: 1, id: "second" },
          { colorIndex: 0, pegIndex: 2, id: "third" },
          { colorIndex: 0, pegIndex: 3, id: "fourth" }
        ]
      };

      let newGuessHistoryList = [...state.guessHistoryList];

      //wasnt actually adding score to new guesses - need to continue refactoring
      newGuessHistoryList.push({
        ...action.payload.guess,
        ...action.payload.score
      });
      //TODO add test to make sure default guess is set
      return {
        ...state,
        guessHistoryList: newGuessHistoryList,
        pegEntryList: defaultGuess,
        hasWon: action.payload.hasWon
      };
    }
    case RESET_GUESSES: {
      return guessReducer_initialState;
    }
    default:
      return state;
  }
}
