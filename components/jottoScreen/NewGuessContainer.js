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
      <View style={styles.container}>
        <ScrollView>
          <Row type="entry" addGuess={this.props.addGuess}>
            <PegBox
              type="entry"
              pegList={this.props.pegList}
              pegAction={this.props.pegAction}
            />
          </Row>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: "hsla(197, 20%, 50%, 1)",
    borderBottomWidth: 2,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.rowBg,
    shadowColor: "hsla(197, 20%, 50%, 1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 20
  }
});
