import { CHANGE_PEG_COLOR, ADD_GUESS } from "../actions";
import Colors from "../constants/Colors";

guessReducer_initialState = {
  pegEntryList: [
    { colorIndex: 0, pegIndex: 1, id: "first" },
    { colorIndex: 1, pegIndex: 2, id: "second" },
    { colorIndex: 2, pegIndex: 3, id: "third" },
    { colorIndex: 3, pegIndex: 4, id: "fourth" }
  ],
  guessHistoryList: [
    [
      { colorIndex: 0, pegIndex: 1, id: "first" },
      { colorIndex: 1, pegIndex: 2, id: "second" },
      { colorIndex: 2, pegIndex: 3, id: "third" },
      { colorIndex: 3, pegIndex: 4, id: "fourth" }
    ]
  ]
};

export default function guessReducer(
  state = guessReducer_initialState,
  action
) {
  console.log("guessReducer");
  switch (action.type) {
    case CHANGE_PEG_COLOR: {
      let newPegList = [...state.pegEntryList];
      console.log(action.payload);
      newPegList[action.payload.pegIndex].colorIndex =
        (action.payload.colorIndex + 1) % state.pegEntryList.length;
      return { ...state, pegEntryList: newPegList };
    }
    case ADD_GUESS: {
      let newGuessHistoryList = [...state.guessHistoryList];
      newGuessHistoryList.push[action.payload];
      return { ...state, guessHistoryList: newGuessHistoryList };
    }
    default:
      return state;
  }
}
