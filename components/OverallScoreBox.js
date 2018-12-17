import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

export default class OverallScoreBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: Colors.textColor }}>42</Text>
        <Text style={{ fontSize: 14, color: Colors.textColor }}>Guesses</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
