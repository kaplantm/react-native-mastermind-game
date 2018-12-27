import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; //TODO: look through and remove unnecessary imports
//reduce simple components to const, not react components
import Colors from "../../shared/Colors";
import GuessHistoryContainer from "./NewGuessContainer";

import Icon from "../Icon";

export default class GameHeader extends React.Component {
  render() {
    let gameAction = this.props.newGame
      ? this.props.resetGame
      : this.props.giveUp;

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={gameAction}>
          <View
            style={[
              styles.inner,
              {
                backgroundColor: this.props.newGame
                  ? Colors.colorKey.mediumBlue
                  : Colors.colorKey.red
              },
              styles.item
            ]}
          >
            <Text style={styles.text}>
              {this.props.newGame ? "New Game" : "Give Up"}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Settings")}>
          <View style={[styles.item]}>
            <Icon
              // focused={focused}
              name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
              lightScheme={this.props.lightScheme}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.2,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    // marginBottom: 20,
    // backgroundColor: Colors.colorKey.lightGrey,
    paddingBottom: 10,
    // padding: 10,
    // borderBottomColor: Colors.colorKey.grey,
    // borderBottomWidth: 2,
    paddingTop: 0
  },
  inner: {
    borderColor: "hsla(197, 0%, 0%, .1)",
    borderWidth: 2,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  text: {
    fontWeight: "500",
    color: Colors.colorKey.white
  },
  item: {
    marginLeft: 20,
    marginRight: 20
  }
});
