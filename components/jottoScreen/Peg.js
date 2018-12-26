import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";

class Peg extends React.Component {
  render() {
    let borderStyle =
      this.props.lightScheme === false
        ? { borderColor: "hsla(197, 0%, 0%, .5)" }
        : { borderColor: "hsla(197, 0%, 0%, .2)" };

    return <View style={[styles.peg, this.props.styleProp, borderStyle]} />;
  }
}

const mapStateToProps = state => {
  return {
    lightScheme: state.settingsReducer.lightScheme
  };
};

export default connect(mapStateToProps)(Peg);

const styles = StyleSheet.create({
  peg: {
    backgroundColor: "yellow",
    aspectRatio: 1,
    borderRadius: 1000,
    borderWidth: 2
  }
});
