import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import OverallScoreBox from "./OverallScoreBox";
import RowScoreBox from "./RowScoreBox";
import CustomButton from "./CustomButton";
import Colors from "../constants/Colors";

export default class Row extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.code}>{this.props.children}</View>
        <View style={styles.score}>
          {this.props.type === "code" ? (
            <OverallScoreBox />
          ) : this.props.type === "entry" ? (
            <CustomButton
              action="TODO"
              styleProp={{ backgroundColor: "white" }}
              label="Guess"
            >
              <Text style={styles.buttonText}>+</Text>
              <Text style={styles.buttonTextMinor}>Guess</Text>
            </CustomButton>
          ) : (
            <RowScoreBox />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  code: {
    flex: 3
  },
  score: {
    flex: 1
  },
  buttonText: {
    color: Colors.text,
    fontSize: 40
  },
  buttonTextMinor: {
    color: Colors.text
  }
});
