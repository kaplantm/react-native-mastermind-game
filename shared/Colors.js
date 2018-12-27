const colorKey = {
  red: "hsla(0, 64%, 74%, 1)",
  blue: "hsla(197, 64%, 74%, 1)",
  mediumBlue: "hsla(197, 64%, 54%, 1)",
  darkGreen: "hsla(118, 50%, 55%, 1)",
  green: "hsla(118, 64%, 74%, 1)",
  yellow: "hsla(51, 85%, 74%, 1)",
  lightGrey: "hsla(197, 20%, 95%, 1)",
  grey: "hsla(197, 20%, 90%, 1)",
  darkGrey: "hsla(197, 40%, 50%, 1)",
  dullGrey: "hsla(197, 10%, 50%, 1)",
  black: "hsla(197, 40%, 40%, 1)",
  white: "hsla(197, 20%, 98%, 1)",
  none: "hsla(197, 20%, 100%, 0)"
};

let colors = {
  rowBg: colorKey.lightGrey,
  border: colorKey.darkGrey,
  borderLight: colorKey.grey,
  rowWinBg: colorKey.green,
  text: colorKey.darkGrey,
  pageBg: colorKey.lightGrey,
  codePegs: [
    { color: colorKey.red },
    { color: colorKey.blue },
    { color: colorKey.green },
    { color: colorKey.yellow }
  ],
  scorePegs: {
    grey: colorKey.grey,
    black: colorKey.black,
    none: colorKey.none
  },
  blockedPegs: colorKey.black,
  colorKey
};

export default colors;
