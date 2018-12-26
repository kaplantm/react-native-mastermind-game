import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../shared/Colors";
import { connect } from "react-redux";

class OverallScoreBox extends React.Component {
  render() {
    let textStyle = this.props.lightScheme
      ? { color: Colors.text }
      : { color: "hsla(197, 0%, 0%, .5)" };

    return (
      <View style={styles.container}>
        <Text style={[{ fontSize: 30 }, textStyle]}>
          {this.props.guessList.length}
        </Text>
        <Text style={[{ fontSize: 14 }, textStyle]}>Guesses</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    lightScheme: state.settingsReducer.lightScheme
  };
};

export default connect(mapStateToProps)(OverallScoreBox);

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
