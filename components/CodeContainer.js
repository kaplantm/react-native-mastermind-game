import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Row from "./Row";
import Colors from "../shared/Colors";
import PegBox from "../components/PegBox";

export default class CodeContainer extends React.Component {
  render() {
    const winStyle = this.props.score
      ? {
          backgroundColor: Colors.rowWinBg,
          borderColor: Colors.rowWinBorderLight
        }
      : {};
    return (
      <View style={[styles.container, winStyle]}>
        {/* TODO code row will later be added dynamicaly */}
        <Row
          type="code"
          pegList={this.props.pegList}
          guessList={this.props.guessList}
        >
          <PegBox type="code" pegList={this.props.pegList} />
        </Row>
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
    borderColor: Colors.rowBorderLight
  }
});
