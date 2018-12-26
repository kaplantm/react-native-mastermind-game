import { StyleSheet } from "react-native";
import Colors from "../shared/Colors";

export const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorKey.white
  },
  contentContainer: {
    flex: 1
  },
  codeContainer: {
    flex: 1,
    backgroundColor: Colors.colorKey.lightGrey,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.colorKey.grey
  },
  newGuessContainer: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: Colors.border,
    borderBottomWidth: 2,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.rowBg,
    shadowColor: "hsla(197, 20%, 50%, 1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 20
  }
});

export const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorKey.dullGrey
  },
  contentContainer: {
    flex: 1
  },
  codeContainer: {
    flex: 1,
    backgroundColor: Colors.colorKey.darkGrey,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.colorKey.blue
  },
  newGuessContainer: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: Colors.colorKey.blue,
    borderBottomWidth: 2,
    borderBottomColor: Colors.colorKey.blue,
    backgroundColor: Colors.colorKey.darkGrey,
    shadowColor: "hsla(197, 20%, 50%, 1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 20
  }
});
