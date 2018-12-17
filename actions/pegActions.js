import { CHANGE_PEG_COLOR } from "../actions/";

export function changePeg(peg) {
  console.log("changePeg");
  console.log(peg);
  return {
    type: CHANGE_PEG_COLOR,
    payload: peg
  };
}
