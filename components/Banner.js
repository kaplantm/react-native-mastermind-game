import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//reduce simple components to const, not react components
import Colors from "../shared/Colors";

export default class Banner extends React.Component {
  //{ backgroundColor: this.props.color }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 4,
    borderTopColor: "hsla(197, 0%, 100%, .75)",
    borderBottomWidth: 4,
    borderBottomColor: "hsla(197, 0%, 100%, .75)",
    backgroundColor: Colors.rowWinBg,
    shadowColor: "hsla(197, 20%, 50%, 1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 5
  }
});
