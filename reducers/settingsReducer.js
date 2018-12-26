import { UPDATE_SETTINGS } from "../actions";

const default_state = {
  opened: false,
  sounds: true,
  lightScheme: true
};

export default function settings(state = default_state, action) {
  switch (action.type) {
    case "UPDATE_SETTINGS":
      return { ...state, ...action.payload };
      break;
    default:
      return state;
  }
}
