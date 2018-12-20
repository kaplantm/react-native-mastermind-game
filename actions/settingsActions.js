import { UPDATE_SETTINGS } from ".";

export function updateSettings(settings) {
  console.log("action", settings);
  return {
    type: UPDATE_SETTINGS,
    payload: settings
  };
}
