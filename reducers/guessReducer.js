import { CHANGE_PEG_COLOR, ADD_GUESS } from "../actions";
import Colors from "../shared/Colors";

const guessReducer_initialState = {
  pegEntryList: [
    { colorIndex: 0, pegIndex: 0, id: "first" },
    { colorIndex: 0, pegIndex: 1, id: "second" },
    { colorIndex: 0, pegIndex: 2, id: "third" },
    { colorIndex: 0, pegIndex: 3, id: "fourth" }
  ],
  guessHistoryList: [
    [
      { colorIndex: 0, pegIndex: 0, id: "first" },
      { colorIndex: 1, pegIndex: 1, id: "second" },
      { colorIndex: 2, pegIndex: 2, id: "third" },
      { colorIndex: 3, pegIndex: 3, id: "fourth" }
    ]
  ],
  score: {
    containsScore: 0,
    exactScore: 0,
    message: "Guess Again" //TODO maybe remove message
  }
};

export default function guessReducer(
  state = guessReducer_initialState,
  action
) {
  switch (action.type) {
    case CHANGE_PEG_COLOR: {
      let newPegList = [...state.pegEntryList];
      newPegList[action.payload.pegIndex].colorIndex =
        (action.payload.colorIndex + 1) % state.pegEntryList.length;
      return { ...state, pegEntryList: newPegList };
    }
    case ADD_GUESS: {
      let defaultGuess = [
        { colorIndex: 0, pegIndex: 0, id: "first" },
        { colorIndex: 0, pegIndex: 1, id: "second" },
        { colorIndex: 0, pegIndex: 2, id: "third" },
        { colorIndex: 0, pegIndex: 3, id: "fourth" }
      ];

      let newGuessHistoryList = [...state.guessHistoryList];
      newGuessHistoryList.push([...action.payload.guess]);
      //TODO add test to make sure default guess is set

      return {
        ...state,
        guessHistoryList: newGuessHistoryList,
        pegEntryList: defaultGuess,
        score: action.payload.score
      };
    }
    default:
      return state;
  }
}
