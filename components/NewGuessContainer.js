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
          <Row type="entry" />
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
    borderBottomColor: "hsla(197, 20%, 50%, 1)",
    backgroundColor: "hsla(197, 20%, 95%, 1)",
    shadowColor: "hsla(197, 20%, 50%, 1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  }
});
