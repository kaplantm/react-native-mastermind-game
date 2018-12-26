import { StyleSheet } from "react-native";
import Colors from "../shared/Colors";

export const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white"
  },
  button: {
    backgroundColor: Colors.colorKey.lightGrey
  }
});

export const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.colorKey.dullGrey
  },
  button: {
    backgroundColor: Colors.colorKey.grey
  }
});
