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

export default class GuessHistoryContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* TODO rows will later be added dynamicaly */}
          <Row type="guess" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "hsla(197, 20%, 98%, 1)"
  }
});
