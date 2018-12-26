import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../shared/Colors";
import CustomButton from "../shared/CustomButton";
import StatBox from "../shared/statBox";
import RowScoreBox from "../jottoScreen/RowScoreBox";

//TODO if reused in stats, more this file to shared. if not, rename to settings row
export default class StatsRow extends React.Component {
  render() {
    return (
      <View style={this.props.containerStyle}>
        <CustomButton
          onPress={this.props.onPress}
          styleProp={[styles.container, this.props.stylePropsContainer]}
        >
          <Text style={[this.props.stylePropText, styles.label]}>
            {this.props.label}
          </Text>
          <StatBox
            styleProp={[this.props.styleProp, { flex: 1 }]}
            stylePropText={this.props.stylePropText}
            content={this.props.toggle}
          />
        </CustomButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white"
  },
  label: {
    color: Colors.colorKey.black,
    flex: 1
  }
});
