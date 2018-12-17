import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Row from "./Row";
import Colors from "../constants/Colors";
import PegBox from "../components/PegBox";

export default class CodeContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
    borderWidth: 2,
    borderColor: Colors.rowBorderLight
  }
});
