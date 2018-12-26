import { StyleSheet } from "react-native";
import Colors from "../shared/Colors";

export const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.colorKey.white
  },
  boxText: { color: Colors.colorKey.white, fontWeight: "600", fontSize: 20 },
  boxTextDark: {
    color: Colors.colorKey.black,
    fontWeight: "600",
    fontSize: 20
  },
  containerStyle: {
    alignItems: "flex-start",
    flex: 1
  },
  box: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
    flex: 1
  },
  rowContainer: {
    backgroundColor: Colors.colorKey.white
  },
  onBox: {
    backgroundColor: Colors.colorKey.darkGreen
  },
  offBox: {
    backgroundColor: Colors.colorKey.red
  }
});

export const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.colorKey.dullGrey
  },
  boxText: { color: Colors.colorKey.white, fontWeight: "600", fontSize: 20 },
  boxTextDark: {
    color: Colors.colorKey.black,
    fontWeight: "600",
    fontSize: 20
  },
  containerStyle: {
    alignItems: "flex-start",
    flex: 1
  },
  box: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
    flex: 1
  },
  rowContainer: {
    backgroundColor: Colors.colorKey.grey
  },
  onBox: {
    backgroundColor: Colors.colorKey.darkGreen
  },
  offBox: {
    backgroundColor: Colors.colorKey.red
  }
});
