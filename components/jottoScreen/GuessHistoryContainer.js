import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import PegRow from "./PegRow";
import PegBox from "./PegBox";

const delly = [
  { colorIndex: 0, pegIndex: 1, id: "first" },
  { colorIndex: 1, pegIndex: 2, id: "second" },
  { colorIndex: 2, pegIndex: 3, id: "third" },
  { colorIndex: 3, pegIndex: 4, id: "fourth" }
];

export default class GuessHistoryContainer extends React.Component {
  _renderRows() {
    return this.props.guessList.map((element, index) => {
      return (
        <PegRow
          type="guess"
          key={"row" + index.toString()}
          guessList={element}
          codeLength={this.props.codeLength}
        >
          <PegBox type="guess" pegList={element} />
        </PegRow>
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          {this._renderRows()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5
  }
});
