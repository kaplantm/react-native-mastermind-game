import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default class OverallScoreBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: "hsla(197, 20%, 50%, 1)" }}>
          42
        </Text>
        <Text style={{ fontSize: 14, color: "hsla(197, 20%, 50%, 1)" }}>
          Guesses
        </Text>
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
