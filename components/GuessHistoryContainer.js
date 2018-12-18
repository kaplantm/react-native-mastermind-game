import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Row from "./Row";
import PegBox from "../components/PegBox";

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
        <Row
          type="guess"
          key={"guessRow" + index.toString()}
          guessList={element}
          codeLength={this.props.codeLength}
        >
          <PegBox type="guess" pegList={element} />
        </Row>
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
