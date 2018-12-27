import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Row from "./PegRow";
import PegBox from "./PegBox";
import Colors from "../../shared/Colors";

export default class GuessHistoryContainer extends React.Component {
  render() {
    return (
      <View style={this.props.styleProp}>
        {/* <ScrollView> */}
        <Row
          type="entry"
          addGuess={this.props.addGuess}
          lightScheme={this.props.lightScheme}
        >
          <PegBox
            type="entry"
            pegList={this.props.pegList}
            pegAction={this.props.pegAction}
          />
        </Row>
        {/* </ScrollView> */}
      </View>
    );
  }
}
