import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; //TODO: look through and remove unnecessary imports
//reduce simple components to const, not react components
import Colors from "../../shared/Colors";
import GuessHistoryContainer from "./NewGuessContainer";

export default class GameHeader extends React.Component {
  render() {
    let action = this.props.newGame ? this.props.resetGame : this.props.giveUp;

    return (
      <TouchableOpacity style={[styles.container]} onPress={action}>
        <View
          style={[
            styles.inner,
            {
              backgroundColor: this.props.newGame
                ? Colors.colorKey.mediumBlue
                : Colors.colorKey.red
            }
          ]}
        >
          <Text style={styles.text}>
            {this.props.newGame ? "New Game" : "Give Up"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.2,
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 20,
    // backgroundColor: Colors.colorKey.lightGrey,
    paddingRight: 20,
    // padding: 10,
    paddingTop: 0
  },
  inner: {
    borderColor: Colors.colorKey.grey,
    borderWidth: 2,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  text: {
    fontWeight: "500",
    color: Colors.colorKey.white
  }
});
