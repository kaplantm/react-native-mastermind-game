import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.styleProp]}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderColor: "hsla(197, 20%, 50%, 1)",
    alignItems: "center",
    justifyContent: "center"
  }
});
