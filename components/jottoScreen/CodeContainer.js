import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import PegRow from "./PegRow";
import Colors from "../../shared/Colors";
import PegBox from "./PegBox";

const blockedCode = {
  pegs: [
    { colorIndex: 0, pegIndex: 0, id: "first", type: "blocked" },
    { colorIndex: 0, pegIndex: 1, id: "second", type: "blocked" },
    { colorIndex: 0, pegIndex: 2, id: "third", type: "blocked" },
    { colorIndex: 0, pegIndex: 3, id: "fourth", type: "blocked" }
  ]
};

export default class CodeContainer extends React.Component {
  list = blockedCode;
  render() {
    this.list = this.props.hasWon ? this.props.pegList : blockedCode;

    const winStyle = this.props.score
      ? {
          backgroundColor: Colors.rowWinBg,
          borderColor: Colors.borderLight
        }
      : {};
    return (
      <View style={[styles.container, winStyle]}>
        {/* TODO code row will later be added dynamicaly */}
        <PegRow
          type="code"
          pegList={this.list}
          guessList={this.props.guessList}
        >
          <PegBox type="code" pegList={this.list} />
        </PegRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.rowBg,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.borderLight
  }
});
