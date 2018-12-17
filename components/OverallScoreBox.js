import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../shared/Colors";

export default class OverallScoreBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: Colors.text }}>
          {this.props.guessList.length}
        </Text>
        <Text style={{ fontSize: 14, color: Colors.text }}>Guesses</Text>
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
