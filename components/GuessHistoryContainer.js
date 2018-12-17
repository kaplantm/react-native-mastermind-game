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

export default class GuessHistoryContainer extends React.Component {
  _renderRows() {
    this.props.guessList.map(element => {
      // console.log("- - - - - - - - - - - - - - - - ");
      // console.log(element);
      // console.log("******************************** ");
      return (
        <Row type="guess">
          <PegBox type="guess" pegList={element} />
        </Row>
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* TODO rows will later be added dynamicaly */}
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
