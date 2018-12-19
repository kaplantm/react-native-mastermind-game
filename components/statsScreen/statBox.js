import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../shared/Colors";

export default class GameOutcomeIcon extends React.Component {
  render() {
    return (
      <View style={[styles.box, this.props.styleProp]}>
        <Text style={this.props.stylePropText}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "yellow",
    // aspectRatio: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "hsla(197, 0%, 0%, .1)",
    width: 30,
    alignItems: "center",
    justifyContent: "center"
  }
});
