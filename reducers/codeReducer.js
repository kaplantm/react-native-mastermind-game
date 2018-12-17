import { GENERATE_CODE } from "../actions";
import Colors from "../constants/Colors";
import { shuffleArray } from "../shared/utils";

codeReducer_initialState = {
  pegCodeList: [
    { colorIndex: 0, pegIndex: 1, id: "first" },
    { colorIndex: 1, pegIndex: 2, id: "second" },
    { colorIndex: 2, pegIndex: 3, id: "third" },
    { colorIndex: 3, pegIndex: 4, id: "fourth" }
  ]
};

export default function codeReducer(state = codeReducer_initialState, action) {
  switch (action.type) {
    case GENERATE_CODE: {
      newPegCodeList = state.pegCodeList.map((element, index) => {
        element.colorIndex = action.payload[index];
        return element;
      });

      let test = { ...state, pegCodeList: newPegCodeList };
      return test;
    }
    default:
      return state;
  }
}
