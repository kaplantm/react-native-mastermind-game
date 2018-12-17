import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class Peg extends React.Component {
  render() {
    return <View style={[styles.peg, this.props.styleProp]} />;
  }
}

const styles = StyleSheet.create({
  peg: {
    backgroundColor: "yellow",
    aspectRatio: 1,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "hsla(197, 0%, 0%, .1)"
  }
});
