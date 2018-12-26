import { UPDATE_SETTINGS } from ".";

export function updateSettings(settings) {
  return {
    type: UPDATE_SETTINGS,
    payload: settings
  };
}
