import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Colors from "../shared/Colors";
import StatBox from "../components/statsScreen/statBox";

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    title: "Game History"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <Text>
          This screen will contain game history - scores from the past 10 games.
          Clicking a game will open a view of it
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statRow}>
            <StatBox
              styleProp={{
                backgroundColor: Colors.colorKey.darkGreen,
                aspectRatio: 1
              }}
              stylePropText={{
                color: Colors.colorKey.white,
                fontWeight: "600"
              }}
              content="W"
            />
            {/* <GameOutcomeIcon didWin={true} /> */}
            <Text style={styles.statRowText}>12 guesses / 10 minutes</Text>
          </View>
          <View style={styles.statRow}>
            <StatBox
              styleProp={{
                backgroundColor: Colors.colorKey.red,
                aspectRatio: 1
              }}
              stylePropText={{
                color: Colors.colorKey.white,
                fontWeight: "600"
              }}
              content="L"
            />
            <Text style={styles.statRowText}>12 guesses / 10 minutes</Text>
          </View>
          <View style={styles.statRow}>
            <StatBox
              styleProp={{
                backgroundColor: Colors.colorKey.darkGreen,
                aspectRatio: 1
              }}
              stylePropText={{
                color: Colors.colorKey.white,
                fontWeight: "600"
              }}
              content="W"
            />
            <Text style={styles.statRowText}>12 guesses / 10 minutes</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.pageBg
  },
  statsContainer: {
    backgroundColor: Colors.colorKey.white,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.borderLight,
    borderWidth: 2

    // flex: 1
  },
  statRow: {
    // borderColor: Colors.colorKey.red
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 5,
    marginBottom: 5
  },
  statRowText: {
    paddingLeft: 10
    // color: Colors.colorKey.white
  }
});
