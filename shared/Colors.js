const colorKey = {
  red: "hsla(0, 64%, 74%, 1)",
  blue: "hsla(197, 64%, 74%, 1)",
  green: "hsla(118, 64%, 74%, 1)",
  yellow: "hsla(51, 85%, 74%, 1",
  lightGrey: "hsla(197, 20%, 95%, 1)",
  grey: "hsla(197, 20%, 90%, 1)",
  darkGrey: "hsla(197, 30%, 50%, 1)",
  black: "hsla(197, 20%, 40%, 1)",
  none: "hsla(197, 20%, 100%, 0)"
};

export default {
  tabIconDefault: colorKey.black,
  tabIconSelected: "#2f95dc",
  rowBg: colorKey.lightGrey,
  rowBorder: colorKey.darkGrey,
  rowBorderLight: colorKey.grey,
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
  blockedPegs: colorKey.black
};
