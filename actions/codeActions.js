import { GENERATE_CODE } from ".";

export function generateCode(length) {
  let code = [];
  for (let i = 0; i < length; i++) {
    code.push(Math.floor(Math.random() * length));
  }
  return {
    type: GENERATE_CODE,
    payload: code
  };
}
