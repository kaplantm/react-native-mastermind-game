import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Colors from "../shared/Colors";

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    title: "Personal Statistics"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <Text>
          This screen will contain user statistics, such as average time,
          average number of guesses, best time, worst time. Most guesses, least
          guesses. Would also be fun to have how you did in the last week
          relative to your history. If not in the last week, maybe your last
          game?
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.pageBg
  }
});
