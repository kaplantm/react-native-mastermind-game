import { CHANGE_PEG_COLOR } from "../actions/";
import Colors from "../constants/Colors";

initialState = {
  pegEntryList: [
    { colorIndex: 0, pegIndex: 0, id: "first" },
    { colorIndex: 1, pegIndex: 1, id: "second" },
    { colorIndex: 2, pegIndex: 2, id: "third" },
    { colorIndex: 3, pegIndex: 3, id: "fourth" }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PEG_COLOR: {
      let newPegList = [...state.pegEntryList];
      newPegList[action.payload.pegIndex].colorIndex =
        (action.payload.colorIndex + 1) % state.pegEntryList.length;
      return { ...state, pegEntryList: newPegList };
    }
    default:
      return state;
  }
}
